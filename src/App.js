import React, { Component } from 'react';
import Login from './components/login/login';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Hello World</h1>
        </header>
        <Login />
        <p className="App-intro">{"Don't have an account?"} <a href="/">Create one.</a> </p>
      </div>
    );
  }
}

export default App;
