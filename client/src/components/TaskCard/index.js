import React, { Component } from "react";
// import "./style.css";
import Card from 'react-bootstrap/Card';
// import Button from 'react-bootstrap/Button';
import Dropdown from 'react-bootstrap/Dropdown'
import DropdownButton from 'react-bootstrap/DropdownButton'

class TaskCard extends Component {

    state = {
        value1: 'to-do',
        value2: 'in-progress',
        value3: 'done'
    };

    change = (eventKey) => {
        console.log(eventKey)
    }

    render() {
        return (
            <div>
                <Card>
                    <Card.Body>
                        <Card.Title id={this.props.id}>{this.props.title}</Card.Title>
                        <DropdownButton onSelect={this.change} id="dropdown-basic-button" title="Status" >
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