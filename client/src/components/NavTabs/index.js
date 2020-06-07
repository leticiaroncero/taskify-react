import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import "./style.css";
import API from "../../utils/API";
import Button from "react-bootstrap/Button"
import { withRouter } from "react-router-dom";

class NavTabs extends Component {

    handleLogout = event => {
        event.preventDefault();

        API.logout()
            .then(response => {

                if (response.status === 200) {
                    console.log(response.status)
                    this.props.updateUser({
                        loggedIn: false,
                    })
                    this.props.history.push("/");
                   
                }
            }).catch(error => {
                console.log(error);
                console.log('Logout error')
            });
    }

    render() {
       
        return (

            <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
                {/* <Link to="/"> <img src={logo} width="60" height="60" alt="logo" id="logo" /></Link>  */}
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown"
                    aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse text-right" id="navbarNavDropdown">

                    <ul className="nav nav-pills navbar-nav ml-auto">
                        {this.props.loggedIn ? (
                            <Fragment>
                                <li className="nav-item active">
                                    <Link to="/projects" className="nav-link topic">
                                        Projects
                        </Link>
                                </li>
                                <li className="nav-item active">
                                    <Link to={{ pathname: '/' }} className="nav-link topic" onClick={this.handleLogout}>
                                        Logout
                                </Link> 
                                </li>
                            </Fragment>) : (
                                <Fragment>
                                    <li className="nav-item active">
                                        <Link to="/signup" className="nav-link topic">
                                            Sign Up
                                </Link>
                                    </li>
                                    <li className="nav-item active">
                                        <Link to="/login" className="nav-link topic">
                                            Login
                                </Link>
                                    </li>
                                </Fragment>
                            )}
                    </ul>
                </div>
            </nav>
        );
    }
}
export default withRouter(NavTabs);
