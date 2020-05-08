
import React, { Component } from "react";
// import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
// import Homepage from "./pages/Homepage";
// import Projects from "./pages/Projects";
import Signup from "./pages/Signup";
// import Login from "./pages/Login";

class App extends Component {

  state = {
    loggedIn: false
  }

  render() {
  return (
    <Router>
        <div>
          {/* <NavTabs updateUser={this.updateUser} loggedIn={this.state.loggedIn} /> */}
          <Route exact path="/signup" component={Signup} />
          {/* <Route exact path="/login" render={() =>
            <Login
              updateUser={this.updateUser}
            />} />
          <Route exact path="/" render={() =>
            <Homepage
              loggedIn={this.state.loggedIn}
            />} /> */}
          {/* <Route exact path="/projects" component={Projects} /> */}
        </div>
      </Router>
  );
}
}

export default App;
