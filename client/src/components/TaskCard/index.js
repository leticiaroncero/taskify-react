import React, { Component } from "react";
import "./style.css";
import Card from 'react-bootstrap/Card';
// import Button from 'react-bootstrap/Button';
import Dropdown from 'react-bootstrap/Dropdown'
import DropdownButton from 'react-bootstrap/DropdownButton'
// import API from "../../utils/API";

class TaskCard extends Component {

    render() {
        return (
            <div>
                <Card>
                    <Card.Body>
                        <Card.Title>{this.props.title}</Card.Title>
                        <DropdownButton onSelect={(eventKey) => this.props.handleChange(eventKey, this.props.id)} title="Status">
                            <Dropdown.Item eventKey="to-do" >To Do</Dropdown.Item>
                            <Dropdown.Item eventKey="in-progress" >In Progress</Dropdown.Item>
                            <Dropdown.Item eventKey="done" >Done</Dropdown.Item>
                        </DropdownButton>
                        <i className="fa fa-trash fa-lg circle-icon a" aria-hidden="true" onClick={() => this.props.handleDelete(this.props.id)}></i>
                    </Card.Body>
                </Card>

            </div>
        )

    }



}

export default TaskCard;