/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Login.css';

class Login extends React.Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
  };
  static contextTypes = { fetch: PropTypes.func.isRequired };

   getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for(var i = 0; i <ca.length; i++) {
      var c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
  }

  handleSubmit = async () => {
    let options = {
      body: JSON.stringify({
        query:`mutation {
          signup(input: {username: "shubham", email: "shubham.gupta@zyloto.com", password: "1234567", userType: "admin"}) {
            jwtToken
          }
        }
      `,
      }),
    }

    if (this.getCookie('id_token')) {
      console.log("cookie exist----------------")
      options.headers = {
        "Authorization": "Bearer " + this.getCookie('id_token'),
      }
    }

    const resp = await this.context.fetch('/graphql', options );

    const { data ,errors} = await resp.json();
    console.log(data);
    console.log(errors);
  }

  render() {
    return (
    <div className={s.root}>
        <div className={s.container}>
          <h1>{this.props.title}</h1>
          <p className={s.lead}>
            Log in with your username or company email address.
          </p>
            <div className={s.formGroup}>
              <label className={s.label} htmlFor="usernameOrEmail">
                Username or email address:
                <input
                  className={s.input}
                  id="usernameOrEmail"
                  type="text"
                  name="usernameOrEmail"
                  autoFocus // eslint-disable-line jsx-a11y/no-autofocus
                />
              </label>
            </div>
            <div className={s.formGroup}>
              <label className={s.label} htmlFor="password">
                Password:
                <input
                  className={s.input}
                  id="password"
                  type="password"
                  name="password"
                />
              </label>
            </div>
            <div className={s.formGroup}>
              <button className={s.button} onClick={this.handleSubmit}>
                Log in
              </button>
            </div>
        </div>
      </div>
    );
  }
}

export default withStyles(s)(Login);
