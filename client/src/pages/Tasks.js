import React, { Component } from "react";
import Button from 'react-bootstrap/Button'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import API from "../utils/API";
import TaskCard from "../components/TaskCard";

class Tasks extends Component {

    state = {
        tasks: []
    }

    componentDidMount = () => {
        this.handleTasks();
    }


    handleTasks = () => {
        console.log("I'm here")
        console.log(this.state)
        var projectId = window.location.pathname.split("/")[2];
        API.getTasks(projectId)
            .then(res => {
                console.log(res.data)
                this.setState({ tasks: res.data })
            })
            .catch(err => console.log(err));
    }

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
                    <Col sm style={this.style}><h1>To do</h1>
                        {this.state.tasks.map(task => {
                            return (
                                <TaskCard
                                    key={task.id}
                                    title={task.title}
                                    status={task.status} />
                            )
                        })}</Col>
                    <Col sm><h1>In Progress</h1></Col>
                    <Col sm><h1>Done</h1></Col>
                </Row>
            </div>
        )
    }
}

export default Tasks;