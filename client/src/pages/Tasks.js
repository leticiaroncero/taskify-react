import React, { Component } from "react";
import Button from 'react-bootstrap/Button'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import API from "../utils/API";
import TaskCard from "../components/TaskCard";


class Tasks extends Component {

    state = {
        toDo: [],
        inProgress: [],
        done: [],
        projectId: window.location.pathname.split("/")[2]
    }

    componentDidMount = () => {
        this.handleTasks();
    }


    handleTasks = () => {
        console.log("I'm here")
        console.log(this.state)
        //var projectId = window.location.pathname.split("/")[2];
        API.getTasks(this.state.projectId)
            .then(res => {
                console.log(res.data)
                this.handleStatus(res.data);
            })
            .catch(err => console.log(err));
    }

    handleStatus = tasks => {
        var todoTasks = tasks.filter(function (task) {
            return task.status === "to-do";
        });
        var inProgressTasks = tasks.filter(function (task) {
            return task.status === "in-progress";
        });
        var doneTasks = tasks.filter(function (task) {
            return task.status === "done";
        });
        this.setState({
            toDo: todoTasks,
            inProgress: inProgressTasks,
            done: doneTasks
        });
    }

    handleChange = (eventKey, id) => {
        console.log(eventKey)
        console.log(id)
        console.log(this.state.projectId)

        API.updateTask(this.props.projectId, id, eventKey)
            .then(function (res) {
                // console.log(res)
                // // window.location.reload()
            })
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
                <Button href={this.state.projectId + "/tasks/add"}>Create New Task</Button>

                <Row>
                    <Col sm style={this.style}><h1>To do</h1>
                        {/* {this.handleStatus("to-do")} */}
                        {this.state.toDo.map(task => {
                            return (
                                <TaskCard
                                    key={task.id}
                                    title={task.title}
                                    status={task.status}
                                    id={task.id}
                                    projectId={this.state.projectId}
                                    handleChange={this.handleChange} />
                            )
                        })}</Col>
                    <Col sm style={this.style}><h1>In Progress</h1>
                        {this.state.inProgress.map(task => {
                            return (
                                <TaskCard
                                    key={task.id}
                                    title={task.title}
                                    status={task.status}
                                    id={task.id}
                                    projectId={this.state.projectId}
                                    handleChange={this.handleChange} />
                            )
                        })}
                    </Col>
                    <Col sm style={this.style}><h1>Done</h1>
                        {this.state.done.map(task => {
                            return (
                                <TaskCard
                                    key={task.id}
                                    title={task.title}
                                    status={task.status}
                                    id={task.id}
                                    projectId={this.state.projectId}
                                    handleChange={this.handleChange} />
                            )
                        })}
                    </Col>
                </Row>
            </div>
        )
    }
}

export default Tasks;