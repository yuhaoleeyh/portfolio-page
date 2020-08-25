import React from 'react';
import { Card } from 'react-bootstrap';
import './css/about.scss';
import ScrollAnimation from 'react-animate-on-scroll';
import { Button, Col, Row, Container, Image } from 'react-bootstrap';
import profile from './img/image.png'

 
// import all the styles


const About = () => {
    return (
        <div className = "grey-colour about">
          <div className = "text-center break">
              <h3> 
                ABOUT ME 
              </h3>
          </div>
          <div className = "about text-center">
          <ScrollAnimation animateIn="fadeIn">
            <Container className = "bottom-break word">
              <Row>
                <Col md = {{ span: 10, offset: 1 }}>
            <p>
              <p3>
                Hi! My name is Yu Hao. As a self-taught developer, I believe in lifelong learning and always strive for continuous improvement. I am passionate in Software Development, DevOps, CyberSecurity and developing awesome UIs. As a member of SMU Business Intelligence Analytics and WhiteHats, I am open to learning new and emerging technologies.  
              </p3>
              </p>
              <p>
              <p3>
                  I strive to make an impact on whatever I do, touch the hearts of whoever I meet and make a difference with the knowledge I have.
              </p3>
              </p>
              <p>
                <p3>
                  In my free time, I enjoy listening to music, spending time with family and friends and cooking. 
                </p3>
              </p>
              <Image src = {profile} height = {250} width = {180}></Image>
              </Col>
              </Row>
            </Container>
        </ScrollAnimation>
        </div>
      </div>
    )
}

export default About;