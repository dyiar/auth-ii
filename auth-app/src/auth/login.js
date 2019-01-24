import React, { Component } from "react";
import axios from "axios";

class Login extends Component {
  state = {
    username: "",
    password: ""
  };

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    const endpoint = process.env.REACT_APP_API_URL;

    axios
      .post(`${endpoint}/api/login`, this.state)
      .then(response => {
        this.setState({
          username: "",
          password: ""
        });
        localStorage.setItem("jwt", response.data.token);
        this.props.history.push("/users");
      })
      .catch(() => console.log("error posting login"));
  };

  render() {
    return (
      <>
        <h2>Login</h2>
        <form onSubmit={this.handleSubmit}>
          <input
            name="username"
            value={this.state.username}
            type="text"
            placeholder="username"
            onChange={this.handleChange}
          />
          <input
            name="password"
            value={this.state.password}
            type="password"
            placeholder="password"
            onChange={this.handleChange}
          />
          <button onSubmit={this.handleSubmit}>Submit</button>
        </form>
      </>
    );
  }
}

export default Login;
