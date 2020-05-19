import React, { Component } from "react";
import Button from 'react-bootstrap/Button'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import API from "../utils/API";
import TaskCard from "../components/TaskCard";

class Tasks extends Component {

    state = {
        tasks: [],
        toDo: [],
        inProgress: [],
        Done: []
    }

    componentDidMount = () => {
        this.handleTasks();
        this.handleStatus();
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

    handleStatus = status => {

        var filterTasks = this.state.tasks.filter(function (task) {
            if (status === "to-do") { return task}
            // else if (task.status === "in-progress") { return this.setState({ inProgress: filterTasks }) }
            // else {
            //     return this.setState({ done: filterTasks })
            // }
        })
        this.setState({ toDo: filterTasks })
    }

    style = {
        backgroundColor: "#ebecf0",
        borderRadius: "3px",
        border: "1px",
        // maxHeight: "100%"
    }

    render() {
        return (
            <div>
                <Button href="#">Create New Task</Button>

                <Row>
                    <Col sm style={this.style}><h1>To do</h1>
                        {this.handleStatus("to-do")}
                        {this.state.tasks.map(task => {
                            return (
                                <TaskCard
                                    key={task.id}
                                    title={task.title}
                                    status={task.status} />
                            )
                        })}</Col>
                    <Col sm><h1>In Progress</h1>
                        {this.state.inProgress.map(task => {
                            return (
                                <TaskCard
                                    key={task.id}
                                    title={task.title}
                                    status={task.status} />
                            )
                        })}
                    </Col>
                    <Col sm><h1>Done</h1>
                        {this.state.Done.map(task => {
                            return (
                                <TaskCard
                                    key={task.id}
                                    title={task.title}
                                    status={task.status} />
                            )
                        })}
                    </Col>
                </Row>
            </div>
        )
    }
}

export default Tasks;