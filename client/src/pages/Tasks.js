import React, { Component } from "react";
import Button from 'react-bootstrap/Button'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
// import API from "../utils/API";
import TaskCard from "../components/TaskCard";

class Tasks extends Component {

    style = {
        backgroundColor: "#ebecf0",
        borderRadius: "3px",
        border: "1px",
        // maxHeight: "100%"
    };

    render() {
        return (
            <div>
                <Button href="#">Create New Task</Button>

                <Row>
                    <Col sm style={this.style}><h1>To do</h1></Col>
                    <Col sm><h1>In Progress</h1></Col>
                    <Col sm><h1>Done</h1></Col>
                </Row>

                <TaskCard/>
            </div>
        )
    }
}

export default Tasks;