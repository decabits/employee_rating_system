CREATE EXTENSION IF NOT EXISTS plpgsql WITH SCHEMA pg_catalog;
CREATE EXTENSION pgcrypto;
CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    name text NOT NULL,
    email text NOT NULL UNIQUE,
    password text NOT NULL,
    user_type text NOT NULL
);

CREATE TABLE user_peers (
    id SERIAL PRIMARY KEY,
    user_id INTEGER NOT NULL REFERENCES users (id) ON DELETE CASCADE,
    peer_id INTEGER NOT NULL REFERENCES users (id) ON DELETE CASCADE,
    CONSTRAINT user_peer UNIQUE(user_id,peer_id)
);

CREATE TABLE ratings (
  	id SERIAL PRIMARY KEY,
    user_peer_id INTEGER NOT NULL REFERENCES user_peers (id) ON DELETE CASCADE,
  	rating INTEGER NOT NULL CHECK (rating > 0 AND rating < 11),
  	feedback text,
  	month INTEGER NOT NULL CHECK (month > 0 AND month < 13),
  	year INTEGER NOT NULL,
  	CONSTRAINT user_peer_rating UNIQUE(user_peer_id, month, year)
);

CREATE ROLE anonymous;
CREATE ROLE employee;
CREATE ROLE admin;

CREATE TYPE jwt_token AS (
  	role TEXT,
  	user_id INTEGER,
  	name TEXT
);

CREATE FUNCTION SIGNUP(username TEXT, email TEXT, password TEXT, user_type TEXT) RETURNS jwt_token AS
$$
DECLARE
	  -- variable to store the token information
	  token_information jwt_token;
BEGIN
	  -- do not store the raw password! Use postgres' crypt function
	  INSERT INTO users (name, email, password, user_type) VALUES ($1, $2, crypt($3, gen_salt('bf', 8)), $4);
	  -- no select the currently inserted user.
	  -- 'medium_user' is the (postgresql) role of the current user
	  SELECT users.user_type, id, name
	  INTO token_information
	  FROM users
	  WHERE users.email = $2;
	  RETURN token_information::jwt_token;
END;
-- This was a PLPGSQL function which mutates the database (VOLATILE) and
-- should be executed with the rights of the definer (the current user)
$$ LANGUAGE PLPGSQL VOLATILE STRICT SECURITY DEFINER;

REVOKE EXECUTE ON FUNCTION public.SIGNUP FROM PUBLIC;
GRANT EXECUTE ON FUNCTION SIGNUP(username TEXT, email TEXT, password TEXT, user_type TEXT) TO admin;

-- similar to above
CREATE FUNCTION SIGNIN(email TEXT, password TEXT) RETURNS jwt_token AS
$$
DECLARE
	  token_information jwt_token;
BEGIN
	  SELECT user_type, id, name
	  INTO token_information
	  FROM users
	  WHERE users.email = $1
	  AND users.password = crypt($2, users.password);
	  RETURN token_information::jwt_token;
end;
$$ LANGUAGE PLPGSQL VOLATILE STRICT SECURITY DEFINER;

GRANT EXECUTE ON FUNCTION SIGNIN(email TEXT, password TEXT) TO anonymous;
GRANT EXECUTE ON FUNCTION SIGNIN(email TEXT, password TEXT) TO employee;
GRANT EXECUTE ON FUNCTION SIGNIN(email TEXT, password TEXT) TO admin;

GRANT ALL ON users TO admin;
GRANT ALL ON user_peers TO admin;
GRANT ALL ON ratings TO admin;

GRANT SELECT ON users TO employee;
GRANT SELECT ON user_peers TO employee;
GRANT SELECT, INSERT, UPDATE, DELETE ON ratings TO employee;

CREATE FUNCTION current_user_id() RETURNS INTEGER AS $$
-- The content of the JWT token is stored in jwt.claims
-- The user id is stored accordingly in jwt.claims.user_id
SELECT NULLIF(current_setting('jwt.claims.user_id', TRUE), '')::INTEGER;
$$ LANGUAGE SQL STABLE;

GRANT EXECUTE ON FUNCTION current_user_id() TO anonymous;
GRANT EXECUTE ON FUNCTION current_user_id() TO employee;
GRANT EXECUTE ON FUNCTION current_user_id() TO admin;

ALTER TABLE users ENABLE ROW LEVEL SECURITY;

CREATE POLICY admin_all ON users TO admin USING (true) WITH CHECK (true);

CREATE POLICY own_user ON users TO employee
    USING (id = current_user_id())

CREATE POLICY own_peer ON users TO employee
    USING (id IN (SELECT peer_id FROM user_peers WHERE user_peers.user_id = current_user_id()))

ALTER TABLE user_peers ENABLE ROW LEVEL SECURITY;

CREATE POLICY admin_all ON user_peers TO admin USING (true) WITH CHECK (true);

CREATE POLICY own_user_peers ON user_peers TO employee
    USING (user_id = current_user_id())

ALTER TABLE ratings ENABLE ROW LEVEL SECURITY;

CREATE POLICY admin_all ON ratings TO admin USING (true) WITH CHECK (true);

CREATE POLICY peer_ratings ON ratings TO employee
    USING (user_peer_id IN (SELECT id FROM user_peers WHERE user_peers.user_id = current_user_id()))
    WITH CHECK (user_peer_id IN (SELECT id FROM user_peers WHERE user_peers.user_id = current_user_id()))

GRANT USAGE, SELECT, UPDATE ON SEQUENCE user_peers_id_seq TO admin;
GRANT USAGE, SELECT, UPDATE ON SEQUENCE ratings_id_seq TO admin;
GRANT USAGE, SELECT, UPDATE ON SEQUENCE ratings_id_seq TO employee;

CREATE OR REPLACE function get_user()
RETURNS users AS $$
  SELECT id, name ,email, password, user_type
  FROM users
  WHERE id = current_user_id()
$$
language sql;

GRANT EXECUTE ON FUNCTION get_user() TO anonymous;
GRANT EXECUTE ON FUNCTION get_user() TO employee;
GRANT EXECUTE ON FUNCTION get_user() TO admin;
