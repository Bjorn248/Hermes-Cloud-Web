import React, { Component } from 'react';
import './login.css';

class Login extends React.Component {
  render() {
    return (
      <div>
        <h1>Login</h1>
        <div>
          <form className="login-inputs">
            <label for="user">Email</label>
            <input name="user" type="email" id="userEmail" className="user-email-input"></input>

            <label for="password">Password</label>
            <input name="password" type="password" id="userPassword" className="user-password-input"></input>

            <button type="submit" className="login-button">Submit</button>
          </form>
        </div>
      </div>
    );
  }
}

export default Login;
