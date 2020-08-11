import React from 'react';
import { Card, Row, Col } from 'react-bootstrap';
import './css/about.scss';
import c from './img/C++.png';
import java from './img/java.png';
import php from './img/php.png';
import python from './img/python.png';
import react from './img/react.jpg';
import git from './img/git.png';
import css from './img/css.jpg';
import html from './img/html.png';

const About = () => {
    return (
        <div>
        <div className = "text-center">
            <h4>'Don't decrease the goal. Increase the effort'  </h4>
        </div>
        <div className = "about">
        <Card>
        <Card.Header>About Me</Card.Header>
        <Card.Body>
          {/* <Card.Title>Special title treatment</Card.Title> */}
          <Card.Text>
            <p>
              Self-directed developer with extensive knowledge in algorithmic programming. I live and breathe the latest technologies, having worked with frameworks like Git, React JS, WordPress and Bootstrap.
            </p>
            <p>
              An award-winning student, having won medals and top honours across the Mathematical, Physics and Chemistry Olympiads over 7 years. Recognised for being a self taught programmer who is able to adapt to emerging trends and come up with creative ideas. Demonstrated success in competitive programming, having achieved a peak rating of 1708 in CodeChef.
            </p>
            <h4>Programming Languages/Frameworks</h4>
              <Row>
                <Col>
                  <img src = {c} width = "60" height = "60"/>
                </Col>
                <Col>
                  <img src = {java} width = "80" height = "60"/>
                </Col>
                <Col>
                  <img src = {php} width = "60" height = "60"/>
                </Col>
                <Col>
                  <img src = {python} width = "150" height = "60"/>
                </Col>
              </Row>
              <Row className = "break">
                <Col>
                  <img src = {react} width = "150" height = "80"/>
                </Col>
                <Col>
                  <img src = {git} width = "120" height = "40"/>
                </Col>
                <Col>
                  <img src = {css} width = "60" height = "60"/>
                </Col>
                <Col>
                  <img src = {html} width = "60" height = "60"/>
                </Col>
              </Row>
          </Card.Text>
        </Card.Body>
      </Card>
      </div>
      </div>
    )
}

export default About;