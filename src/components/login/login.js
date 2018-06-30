import React, { Component } from 'react';
import './login.css';

class Login extends Component {
  render() {
    return (
      <div className="login-wrapper">
        <form className="login-form">
          <label for="userName">Email</label>
          <input name="userName" type="email"></input>
          <label for="userPassword">Password</label>
          <input name="userPassword" type="password"></input>

          <button type="submit">Login</button>
          <p>
            {"Don't have an account?"}
            <a href="/">Create One</a>
          </p>
        </form>
      </div>
    );
  }
}

export default Login
