import React, { Component, Fragment } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col"
import Button from "react-bootstrap/Button"
import "./Homepage.css"

class Homepage extends Component {
    render() {
        return (
            <Fragment>
                <section id="hero">
                    <div className="container">
                        <Row>
                            <Col>
                                <p className="title">Taskify</p>
                                <p className="subtitle">Manage all of your projects and tasks in one place,
                                and track the progress you're making every step of the way.</p>
                                <Button variant="success" size="lg" className="button">Sign Up</Button>
                            </Col>
                            <Col md>
                                <img src="https://via.placeholder.com/540x409.png"></img>
                            </Col>
                        </Row>
                    </div>
                </section>
                <section>
                    <div className="container">
                        <Row>
                            <Col md={6}>
                                <img src="/homepage-projects.png"></img>
                            </Col>
                            <Col md={{ span: 5, offset: 1 }}>
                                <p className="title">Organize</p>
                                <p className="subtitle">Easily organize your tasks. Start living stress-free.</p>
                            </Col>
                        </Row>
                    </div>
                </section>

                <section>
                    <div className="container">
                        <Row>
                            <Col>
                                <p className="title">Add multiple projects</p>
                                <p className="subtitle">All your projects. One place.</p>
                            </Col>
                            <Col>
                                <img src="https://via.placeholder.com/500x300.png"></img>
                            </Col>
                        </Row>
                    </div>
                </section>

            </Fragment>
        )
    }
}
export default Homepage;