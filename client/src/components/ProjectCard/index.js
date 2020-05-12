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
                      <Button variant="primary">Launch</Button>
                    </Card.Body>
                    </Card>
                  )
                
                }
        
        
        
    }

export default ProjectCard;
