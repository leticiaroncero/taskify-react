import React, { Component } from "react";
// import "./style.css";
import Card from 'react-bootstrap/Card';
// import Button from 'react-bootstrap/Button';
import Dropdown from 'react-bootstrap/Dropdown'
import DropdownButton from 'react-bootstrap/DropdownButton'

class TaskCard extends Component {

    render() {
        return (
            <div>
                <Card>
                    <Card.Body>
                        <Card.Title>{this.props.title}</Card.Title>
                        <DropdownButton id="dropdown-basic-button" title="Dropdown button">
                            <Dropdown.Item eventKey="1" active>To Do</Dropdown.Item>
                            <Dropdown.Item eventKey="2">In Progress</Dropdown.Item>
                            <Dropdown.Item eventKey="3">Done</Dropdown.Item>
                        </DropdownButton>
                    </Card.Body>
                </Card>

            </div>
        )

    }



}

export default TaskCard;