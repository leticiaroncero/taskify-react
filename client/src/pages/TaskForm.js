import React, { Component } from "react";
import API from "../utils/API";
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form';
import { Redirect } from 'react-router-dom';

class TaskForm extends Component {

  state = {
    title: "",
    description: "",
    dueDate: "",
    redirectTo: null,
    projectId: window.location.pathname.split("/")[2]
  }

  onChangeTitle = event => {
    this.setState({
      title: event.target.value
    })
  };

  onChangeDes = event => {
    this.setState({
      description: event.target.value
    })
  };

  onChangeDate = event => {
    this.setState({
      dueDate: event.target.value
    })
  };


  handleNewTask = event => {
    event.preventDefault();

    const newTask = {
      title: this.state.title,
      description: this.state.description,
      due_date: this.state.dueDate
    }

    API.addTask(this.state.projectId, newTask)
      .then(res => {
        this.setState({
          redirectTo: '/projects/' + this.state.projectId,
        })
      })
      .catch(err => console.log(err));
  }
  render() {
    if (this.state.redirectTo) {
      return <Redirect to={{ pathname: this.state.redirectTo }} />
    }
    return (
      <Form>
        <Form.Group controlId="formBasicTitle">
          <Form.Label>Title</Form.Label>
          <Form.Control type="string" placeholder="Enter Title" onChange={this.onChangeTitle} value={this.state.title} />

        </Form.Group>

        <Form.Group controlId="formBasicDescription">
          <Form.Label>Description</Form.Label>
          <Form.Control type="input" placeholder="Enter Description" value={this.state.description} onChange={this.onChangeDes} />
        </Form.Group>

        <Form.Group controlId="formBasicDescription">
          <Form.Label>Due-Date</Form.Label>
          <Form.Control type="date" placeholder="Enter Description" value={this.state.dueDate} onChange={this.onChangeDate} />
        </Form.Group>

        <Button variant="primary" type="submit" onClick={this.handleNewTask} >
          Submit
      </Button>
      </Form>
    )
  }


}

export default TaskForm;