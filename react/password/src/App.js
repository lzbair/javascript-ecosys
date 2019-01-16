import React, { Component } from 'react';
import Password from './Password.js';
import logo from './logo.svg';
import './App.css';


function formatName(name) {
  return name.firstName + ' ' + name.lastName;
}

const user = {
  firstName: 'Lahcen',
  lastName: 'Zbair'
};

const pwdRules =  [
  {
    rule: ".{8,}",
    score: 3
  },
  {
    rule: ".*[a-z]",
    score: 2
  },
  {
    rule: ".*[0-9]",
    score: 2
  },
  {
    rule: ".*[A-Z]",
    score: 1
  }
];

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Hello {formatName(user)} !</h2>
        </div>
        <h3 className="App-intro">
        Evaluate your password
        </h3>
        <Password rules={pwdRules}/>
      </div>
    );
  }
}

export default App;
