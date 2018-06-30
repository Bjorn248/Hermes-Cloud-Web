import React, { Component } from 'react';
import './createAccount.css';

class CreateAccount extends Component {
  render() {
    return (
      <div className="create-account-wrapper">
        <form className="create-account-form">
          <label for="userName">Email</label>
          <input name="userName" type="email"></input>
          <label for="userPassword">Password</label>
          <input name="userPassword" type="password"></input>

          <button type="submit">Create Account</button>
          <p>
            {"Already have an account?"}
            <a href="/">Login</a>
          </p>
        </form>
      </div>
    );
  }
}

export default CreateAccount;
