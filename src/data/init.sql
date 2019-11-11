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
) ;

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
