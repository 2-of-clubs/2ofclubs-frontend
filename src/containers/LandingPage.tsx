import React from 'react'
import Button from "react-bootstrap/Button";
import Jumbotron from "react-bootstrap/Jumbotron";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import {useHistory} from 'react-router-dom'
import "../app.css"

const signup = {
    fontSize: "1.25rem",
    backgroundColor: "white",
    color: "#696DE9",
    padding: "1rem 2rem",
    margin: "10vh 0 0 0",
    borderRadius: "1rem"
};

const changeRoute = (path: string, history: any) => {
    history.push({pathname: path})
};

export const LandingPage = () => {
    const history = useHistory();

    return (
        <Jumbotron fluid bsPrefix="landing">
            <Container fluid>
                <Row>
                    <Col xs>
                        <Button variant="outline-light" className="float-right"
                                style={{margin: "10px", textTransform: "uppercase"}}
                                onClick={() => changeRoute('/login', history)}>
                            Login
                        </Button>
                    </Col>
                </Row>
                <Row>
                    <Col xs>
                        <h1 className="landing-title">
                            2ofClubs
                        </h1>
                    </Col>
                </Row>
                <Row>
                    <Col xs>
                        <h2 className="landing-subtitle">
                            Find the community for you!
                        </h2>
                    </Col>
                </Row>
                <Row>
                    <Col xs className="text-center">
                        <Button style={signup} onClick={() => changeRoute('/signup', history)}>
                            SIGN UP
                        </Button>
                    </Col>
                </Row>
            </Container>
        </Jumbotron>
    );
};

