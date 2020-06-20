import React, { Component } from "react";
import "./style.css";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

class ProjectCard extends Component {

  render() {
    return (
      <Card>
        <Card.Body>
          <Card.Title>{this.props.title}</Card.Title>
          <Card.Text>
            {this.props.description}
          </Card.Text>
          <Button variant="secondary" href={"/projects/" + this.props.project_id}>Launch</Button>
          <i className="fa fa-trash fa-lg circle-icon " aria-hidden="true" onClick={() => this.props.handleDelete(this.props.project_id)}></i>
        </Card.Body>
      </Card>
    )

  }



}

export default ProjectCard;
