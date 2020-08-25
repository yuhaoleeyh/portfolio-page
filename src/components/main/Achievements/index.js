import React from 'react';
import { Button, Col, Row, Container } from 'react-bootstrap';
import './css/index.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileCode, faClock, faHandsHelping } from '@fortawesome/free-solid-svg-icons'
import ScrollAnimation from 'react-animate-on-scroll';
import ReactTable from 'react-table-6';


const Achievements = () => {
    return (
        <div>
            <div className = "resume">
                <div className = "text-center words">
                    <div className = "white-colour resume-break">
                        <h3 className = "line-break">READ SOME OF MY TESTIMONIALS</h3>
                    </div>
                    <Button onClick="location.href = 'https://drive.google.com/file/d/1ldWlI_B0VzM1AyD58E_hhiAyxsTghJMG/view?usp=sharing';">Grab a copy</Button>
                </div>
            </div>
            <Container className = "bottom-break">
                <div className = "text-center resume-break">
                    <h3>MY EXPERIENCES</h3>
                    <p2>
                        <b>Internship with Ace Pointer 
                        </b>
                    </p2>
                    <br/>
                    <p2>
                        Technology Service Provider and E-Commerce Company
                    </p2>
                </div>
                <Row className = "resume-break">
                        <Col xs = {12} md = {4}>
                            <ScrollAnimation animateIn="fadeIn">
                                <div className = "circle text-center">
                                    <FontAwesomeIcon icon={faFileCode} />
                                </div>
                            </ScrollAnimation>
                            <p>
                                Implemented third-party payment gateway API while working with large code bases and databases. Worked with a multitude of frameworks including React, Git, PHP, SQL, Bootstrap and CSS/HTML. 
                            </p>
                        </Col>
                        <Col xs = {12} md = {4}>
                            <ScrollAnimation animateIn="fadeIn" delay = {250}>
                                <div className = "circle text-center">
                                    <FontAwesomeIcon icon={faClock} />
                                </div>
                                <p>
                                    Reallocated to join the main team due to excellent performance, and was deployed to projects with sensitive deadline and sprint cycles. Was involved in extensive code demonstrations, reviews as well as the development of code for live project deployment.  
                                </p>
                            </ScrollAnimation>
                        </Col>
                        <Col xs = {12} md = {4}>
                            <ScrollAnimation animateIn="fadeIn" delay = {500}>
                                <div className = "circle text-center">
                                    <FontAwesomeIcon icon={faHandsHelping} />
                                </div>
                                <p>
                                    Guided other interns in the development process, while also giving presentations and introductory lessons to those not familar with the frameworks. Participated in pair programming and had periodic reviews with full-time software developers and management.  
                                </p>
                            </ScrollAnimation>
                        </Col>
                </Row>
            </Container>
            <div className = "grey-colour">
                <div className = "text-center">
                    <h3 className = "resume-break">MY ACHIEVEMENTS</h3>
                    <Container className = "bottom-break word">
                    <Row>
                        <Col md = {{ span: 10, offset: 1 }}>

                    <hr/>
                    <div className = "bottom-break">
                        <div>
                            2nd runner-up for Pythonic Heicoders Academy Contest 2020
                        </div>
                        <div>
                            3* Competitive Programmer in CodeChef (Peak rating of 1708)
                        </div>
                        <div>
                            SMU Global Impact Scholar (2020 - 2024)
                        </div>
                        <div>
                            ACT Score of 34 (Top 1% of all test-takers, Dec 2017)
                        </div>
                        <div>
                            Singapore Chemistry Olympiad 2016 (Gold Award, Top 19, Selected into National Team Training)
                        </div>
                        <div>
                            MOE-NUS Amazing Lab Race 2015 (1st runner up)
                        </div>
                        <div>
                            International C.B. Paul Science Quiz 2015 (Gold Award)
                        </div>
                        <div>
                            Singapore Junior Physics Olympiad (Silver Award)
                        </div>
                        <div>
                            Zong Xiang Bei Chinese Chess Tournament 2014 (13th in Singapore)
                        </div>
                        <div>
                            Singapore Mathematical Olympiad 2013 (Gold Award, Selected into National Junior Team Training)
                        </div>
                    </div>
                    <h3 className = "resume-break">MY CERTIFICATIONS</h3>
                    <hr/>
                    <div className = "bottom-break">
                        <div>
                            Git Essential Training: The Basics Course (Linkedln, Jun 2020)
                        </div>
                        <div>
                            Programming Fundamentals: Duke University (Coursera, Jun 2020)
                        </div>
                        <div>
                            AWS Machine Learning (Coursera, May 2020)
                        </div>
                        <div>
                            DevOps Foundations (Linkedln, May 2020)
                        </div>
                        <div>
                            Certificate of Merit for SMU Lets Code Program 2016
                        </div>
                    </div>
                    </Col>
                    </Row>
                    </Container>
                </div>
            </div>
        </div>


    )
}

export default Achievements;