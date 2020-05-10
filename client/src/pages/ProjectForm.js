import React, { Component } from "react";
import API from "../utils/API";

class ProjectForm extends Component {

    state = {
        title: "",
        description: ""
    }

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleNewProject = event => {
    event.preventDefault();

    const newProject = {

      title: this.state.title,
      description: this.state.description

    }

    API.addProject(newProject)
      .then(res => {
        if (res.data) {
        //   console.log(res.data)
          window.location.replace("/project");
        }
      })
      .catch(err => console.log(err));
  }

  render() {
    return (
      <div className="container">
        <div className="row">
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
              <button type="submit" className="btn btn-primary btn btn-default" onClick={this.handleSignup}>Sign Up</button>
            </form>
            <br />
            <p>Or log in <Link to="/login">here</Link>.</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Signup;