import React, { Component } from "react";
import axios from "axios";

class Users extends Component {
  state = {
    users: []
  };

  componentDidMount() {
    const endpoint = process.env.REACT_APP_API_URL;

    const token = localStorage.getItem("jwt");
    const requestOptions = {
      headers: {
        authorization: token
      }
    };

    axios
      .get(`${endpoint}/api/users`, requestOptions)
      .then(response => {
        this.setState({
          users: response.data
        });
      })
      .catch(() => console.log("error accessing users"));
  }

  render() {
    return (
      <>
        <h2>List of Users</h2>
        <ul>
          {this.state.users.map(user => (
            <div key={user.username}>
              {user.username}<br/>
              {user.department}<br/><br/>
            </div>
          ))}
        </ul>
      </>
    );
  }
}

export default Users;
