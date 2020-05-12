import React, { Component } from "react";
import Button from 'react-bootstrap/Button'
// import API from "../utils/API";

class Projects extends Component {
    render() {
        return (
            <Button href="/projects/add">Create New Project</Button>
        )
    }
}

export default Projects;