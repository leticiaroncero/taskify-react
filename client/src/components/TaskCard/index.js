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

    change = (event) => {
        this.setState({ value: event.target.value });
        console.log(event)
    }

    render() {
        return (
            <div>
                <Card>
                    <Card.Body>
                        <Card.Title id={this.props.id}>{this.props.title}</Card.Title>
                        <DropdownButton id="dropdown-basic-button" title="Status" >
                            <Dropdown.Item onSelect={this.change} value={this.state.value1} >To Do</Dropdown.Item>
                            <Dropdown.Item onSelect={this.change} value={this.state.value2} >In Progress</Dropdown.Item>
                            <Dropdown.Item onSelect={this.change} value={this.state.value1} >Done</Dropdown.Item>
                        </DropdownButton>
                    </Card.Body>
                </Card>

            </div>
        )

    }



}

export default TaskCard;