import React, { Component } from 'react';

class Password extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rules : props.rules
    };
  }

  handleChange(event) {
   var pwd = event.target.value;
   var score = this.state
                   .rules
                   .filter(function(r) {return new RegExp(r["rule"]).test(pwd)})
                   .map(function(r) {return r["score"]})
                   .reduce(function(s1, s2) {return s1 + s2});
   this.setState({score: score});
 }

  render() {
    return (
      <div>
        <label> Your password </label>
        <input type="password" id="pwd" onKeyUp={this.handleChange.bind(this)}/>
        Your score is : {this.state["score"]}
      </div>
    );
  }
}
export default Password;
