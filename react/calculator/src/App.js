import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';


function formatName(name) {
  return name.firstName + ' ' + name.lastName;
}

const user = {
  firstName: 'Lahcen',
  lastName: 'Zbair'
};

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Hello {formatName(user)} !</h2>
        </div>
        <p className="App-intro">
        <Password/>
        </p>
      </div>
    );
  }
}

class Password extends Component {
  constructor(props) {
    super(props);
    this.state = {rules : [
      {
        rule: ".{8,}",
        score: "3"
      },
      {
        rule: ".*[a-z]",
        score: "2"
      },
      {
        rule: ".*[0-9]",
        score: "2"
      },
      {
        rule: ".*[A-Z]",
        score: "1"
      }
    ]};
  }
  handleChange(event) {
   this.setState({pwdValue: event.target.value});
   this.evaluate(this.state["pwdValue"]);
 }
  evaluate(pwd) {
    var score = this.state
                    .rules
                    .filter(function(r) {return new RegExp(r["rule"]).test(pwd)})
                    .map(function(r) {return r["score"]})
                    .reduce(function(s1, s2) {return s1 + s2});
    console.log(score);
  }
  render() {
    return (
      <div>
        <label> Your password </label>
        <input type="password" id="pwd" onKeyUp={this.handleChange.bind(this)}/>
        <StrengthStatus/>
      </div>
    );
  }
}

class StrengthStatus extends Component{
  constructor(props) {
    super(props);
    this.state = {score: props.score};
  }
  render() {
    return (
      <div>
        <meter min="0" max="100" value={this.state["score"]}/>
      </div>
    );
  }
}

export default App;
