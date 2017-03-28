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
          <Number/> <br/>
          <Operator/> <br/>
          <Number/> <br/>
        </p>
      </div>
    );
  }
}

class Frame extends Component {
  constructor(props) {
    super(props);
    this.state = {name: props.frameName, value: props.frameValue};
  }
  render() {
    return (<input type="text" id={this.state.name} value={this.state.value}/>);
  }
}

class Number extends Component {
  render() {
    return (<Frame frameName="Number" frameValue="10"/>);
  }
}

class Operator extends Component {
  render() {
    return (<Frame frameName="Operator" frameValue="+"/>);
  }
}


export default App;
