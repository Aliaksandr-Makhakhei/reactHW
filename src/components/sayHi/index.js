import "./style.css";
import React, { Component } from "react";

class SayHi extends Component {
  state = {
    loading: false,
    greeting: "",
  };

  sayHi = () => {
    this.setState({ loading: false, greeting: "Hello!" });
  };

  startLoader = () => {
    setTimeout(this.sayHi, 3000);
    this.setState({ loading: true });
  };

  render() {
    return (
      <>
        <button onClick={this.startLoader}>Say Hi</button>
        {this.state.loading && <div className="loader"></div>}
        <span>{this.state.greeting}</span>
      </>
    );
  }
}

export default SayHi;