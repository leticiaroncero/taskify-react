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
                        <DropdownButton onSelect={(eventkey) => this.props.handleChange(eventkey, this.props.id)} title="Status">
                            <Dropdown.Item eventkey="to-do" >To Do</Dropdown.Item>
                            <Dropdown.Item eventkey="in-progress" >In Progress</Dropdown.Item>
                            <Dropdown.Item eventkey="done" >Done</Dropdown.Item>
                        </DropdownButton>
                    </Card.Body>
                </Card>

            </div>
        )

    }



}

export default TaskCard;