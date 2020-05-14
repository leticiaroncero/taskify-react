import React, { Component } from "react";
import API from "../utils/API";
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
class ProjectForm extends Component {

    state = {
        title: "",
        description: ""
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

  // handleInputChange = event => {
  //   const { name, value } = event.target;
  //   this.setState({
  //     [name]: value
  //   });
  // };

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
          window.location.replace("/projects");
        }
      })
      .catch(err => console.log(err));
  }

  render() {
    return (
      <Form>
  <Form.Group controlId="formBasicTitle">
    <Form.Label>Title</Form.Label>
    <Form.Control type="string" placeholder="Enter Title" onChange={this.onChangeTitle} value={this.state.title}  />
  
  </Form.Group>

  <Form.Group controlId="formBasicDescription">
    <Form.Label>Description</Form.Label>
    <Form.Control type="input" placeholder="Enter Description" value={this.state.description} onChange={this.onChangeDes} />
  </Form.Group>
  
  <Button variant="primary" type="submit" onClick={this.handleNewProject}>
    Submit
  </Button>
  </Form>
    )
  }
}

export default ProjectForm;

