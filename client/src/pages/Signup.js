import React, { Component } from "react";
import { Link } from "react-router-dom";

import API from "../utils/API";

class Signup extends Component {

  state = {
    email: "",
    password: "",
  }

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleSignup = event => {
    event.preventDefault();

    const newCredentials = {

      email: this.state.email,
      password: this.state.password

    }

    API.signup(newCredentials)
      .then(res => {
        if (res.data) {
        //   console.log(res.data)
          window.location.replace("/");
        }
      })
      .catch(err => console.log(err));
  }
  style= {
    borderRadius: "4px",
    border: "20px",
    maxWidth: "585px",
    backgroundColor: "#f5deb3",
    color:"#686868",
    paddingTop: "10px",
    position: "relative",
    justifyContent: "center",
    boxShadow: "rgba(0,0,0,0.1) 0 0 10px",
}

  render() {
    return (
      <div className="container">
        <div className="main">
        <div className="row" style={this.style}>
          <div className="col-md-6 col-md-offset-3">
            <h2>Sign Up Form</h2>
            <form className="signup">
              <div className="form-group">
                <label htmlFor="exampleInputEmail1">Email address</label>
                <input type="email" className="form-control" id="email-input" placeholder="Email" name="email" value={this.state.email} onChange={this.handleInputChange} />
              </div>
              <div className="form-group">
                <label htmlFor="exampleInputPassword1">Password</label>
                <input type="password" className="form-control" id="password-input" placeholder="Password" name="password" value={this.state.password} onChange={this.handleInputChange} />
              </div>
              <div style={{ display: "none" }} id="alert" className="alert alert-danger" role="alert">
                <span className="glyphicon glyphicon-exclamation-sign" aria-hidden="true"></span>
                <span className="sr-only">Error:</span> <span className="msg"></span>
              </div>
              <button type="submit" className="btn btn-secondary btn btn-default" onClick={this.handleSignup}>Sign Up</button>
            </form>
            <br />
            <p>Or log in <Link to="/login">here</Link>.</p>
          </div>
        </div>
      </div>
      </div>
    );
  }
}

export default Signup;
