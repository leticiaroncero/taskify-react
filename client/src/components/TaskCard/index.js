import React, { Component } from "react";
// import "./style.css";
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
                        <DropdownButton onSelect={() => this.props.handleChange(this.props.id)} title="Status">
                            <Dropdown.Item eventKey="to-do" >To Do</Dropdown.Item>
                            <Dropdown.Item eventKey="in-progress" >In Progress</Dropdown.Item>
                            <Dropdown.Item eventKey="done" >Done</Dropdown.Item>
                        </DropdownButton>
                    </Card.Body>
                </Card>

            </div>
        )

    }



}

export default TaskCard;