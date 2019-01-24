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
    const makeInput = (name, type, placeholder) => (
        <input
        name={name}
        value={this.state[name]}
        type={type}
        placeholder={placeholder}
        onChange={this.handleChange}
        />
    )
    return (
      <>
        <h2>Login</h2>
        <form onSubmit={this.handleSubmit}>
          {makeInput('username', 'text', 'username')}
          {makeInput('password', 'password', 'password')}
          <button onSubmit={this.handleSubmit}>Submit</button>
        </form>
      </>
    );
  }
}

export default Login;
