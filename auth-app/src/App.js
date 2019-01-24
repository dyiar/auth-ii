import React, { Component } from "react";
import "./App.css";
import Login from "./auth/login";
import Users from "./users/users";
import Register from './register/register'
import { Route, NavLink } from "react-router-dom";

class App extends Component {

  logout = event => {
    localStorage.removeItem('jwt')
    this.props.history.push('/')
  }
  render() {
    return (
      <div className="App">
        <nav>
          <NavLink to="/">Login</NavLink>
          <NavLink to="/register">Register</NavLink>
          <NavLink to='/' onClick={this.logout}>Logout</NavLink>
        </nav>
        <section className="body">
          <Route exact path="/" render={props => <Login {...props} />} />
          <Route path="/users" render={props => <Users {...props} />} />
          <Route path='/register' render={props => <Register {...props} />} />
        </section>
      </div>
    );
  }
}

export default App;
