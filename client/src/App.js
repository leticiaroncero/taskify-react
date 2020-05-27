
import React, { Component } from "react";
// import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Projects from "./pages/Projects";
import NavTabs from "./components/NavTabs";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import ProjectForm from "./pages/ProjectForm"
import Tasks from "./pages/Tasks";
import TaskForm from "./pages/TaskForm";
import API from "./utils/API"

class App extends Component {

  state = {
    loggedIn: false
  }

  componentDidMount () {
    this.getUser()
  }

  updateUser = (userObject) => {
    this.setState(userObject)
  }
  
  getUser() {
    API.getUser()
    .then(response => {
      if (response.status === 200) {
        this.setState({
          loggedIn: true
        })
      }
    });
  }
  render() {
    return (
      <Router>
        <div>
          <NavTabs updateUser={this.updateUser} loggedIn={this.state.loggedIn} />
          <Route exact path="/signup" component={Signup} />
          <Route exact path="/login" render={() =>
            <Login
              updateUser={this.updateUser}
            />} />
          <Route exact path="/homepage" render={() =>
            <Homepage
              loggedIn={this.state.loggedIn}
            />} />
          <Route exact path="/projects" component={Projects} />
          <Route exact path="/projects/add" component={ProjectForm} />
          <Route exact path="/projects/:id(\d+)" component={Tasks} />
          <Route exact path="/projects/:id(\d+)/tasks/add" component={TaskForm}  />
        </div>
      </Router>
    );
  }
}

export default App;
