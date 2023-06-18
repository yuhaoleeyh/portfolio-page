import React from 'react';
import { Container, Card, Button, Row, Col } from 'react-bootstrap';
import ScrollAnimation from 'react-animate-on-scroll';
import './css/header.scss';
import Typed from 'react-typed';


const Header = () => {
    return (
    <div className = "header-outer">
        <div className = "full-content header">
            <div id = "stars"></div>
            <div className = "words text-center">
            <ScrollAnimation animateIn="fadeIn">
                <Container fluid>
                <Row>
                    <Col className = "big-font">Hi! I'm Yu Hao</Col>
                    
                </Row>
                <br/>

                <Row>
                <Col className = "small-font">Singapore Management University Final Year Computer Science Student, Graduating in 2024</Col>
                </Row>

                </Container>
                <br/>
            </ScrollAnimation>
                <h3>
                <Typed
                    strings={[
                        'I am passionate in Software Engineering',
                        'I have experience in Machine Learning/Data Science',
                        'I am passionate in quant and finance',
                        'I have experience in cloud technologies']}
                        typeSpeed={30}
                        backSpeed={30}
                        loop >
                </Typed>
                </h3>
            </div>
        </div>
    </div>
    )
}

export default Header;