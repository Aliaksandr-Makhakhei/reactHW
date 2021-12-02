import "./style.css";
import React, { Component } from "react";

class Login extends Component {
  state = {
    isSignedIn: false,
  };

  logIn = () => {
    this.setState({ isSignedIn: !false });
  };

  onClickButtonlogIn = () => {
    setTimeout(this.logIn, 3000);
  };

  render() {
    return (
      <>
        {this.state.isSignedIn ? <p>Hello user</p> : <button onClick={this.onClickButtonlogIn}>Sing In</button>}
      </>
    );
  }
}

export default Login;