import React, { Component } from "react";
import axios from "axios";

class Register extends Component {
  state = {
    username: "",
    password: "",
    department: '',
  };

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    const endpoint = process.env.REACT_APP_API_URL

    axios
      .post(`${endpoint}/api/register`, this.state)
      .then(() => {
          this.setState({
              username: '',
              password: '',
              department: ''
          })
          this.props.history.push('/')
        })
      .catch(() => console.log("error posting register"));
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
          {makeInput('department', 'text', 'department')}
          <button onSubmit={this.handleSubmit}>Submit</button>
        </form>
      </>
    );
  }
}

export default Register;