import React, { Component } from 'react';
import { withAuthenticator } from 'aws-amplify-react';

import Main from './Main';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <Main></Main>
      </div>
    );
  }
}

export default withAuthenticator(App, true);
