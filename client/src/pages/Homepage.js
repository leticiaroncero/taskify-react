import React, { Component, Fragment } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col"

class Homepage extends Component {
    render() {
        return (
            <Fragment>
                <section id="hero">
                    <div className="container">
                        <Row>
                            <Col>
                                <p class="title">Taskify</p>
                                <p class="subtitle">The easiest way to organize your tasks.</p>
                            </Col>
                            <Col>
                                <img src="https://via.placeholder.com/540x409.png"></img>
                            </Col>
                        </Row>
                    </div>
                </section>
                <section>
                    <div className="container">
                        <Row>
                            <Col>
                                <p class="title">Organize</p>
                                <p class="subtitle">Easily organize your tasks.</p>
                            </Col>
                            <Col>
                                <img src="https://via.placeholder.com/500x300.png"></img>
                            </Col>
                        </Row>
                    </div>
                </section>
                <section>
                    <div className="container">
                        <Row>
                            <Col>
                                <img src="/homepage-projects.png"></img>
                            </Col>
                            <Col>
                                <p class="title">Multiple projects</p>
                                <p class="subtitle">All your projects. One place.</p>
                            </Col>
                        </Row>
                    </div>
                </section>

            </Fragment>
        )
    }
}
export default Homepage;