import React from 'react';
import './css/about.scss';
import ScrollAnimation from 'react-animate-on-scroll';
import { Col, Row, Container, Image } from 'react-bootstrap';
import profile from './img/image.jpeg'

 
// import all the styles


const About = () => {
    return (
        <div className = "about text-center">
          <div className = "about text-center">
            <Container className = "bottom-break word about text-center">
              <Row>
                <Col className = "text-center">
                  <h2>About me</h2>
                </Col>
                
              </Row>
              <Row>
                <Col className = "image text-center">
                  <Image src = {profile} height = {250} width = {250}></Image>
                </Col>
              </Row>
              <br/>
              
              <Row>
                <Col>
              <p>
              <p3>
              I am a Software Engineer, specialising in full stack/backend/software development with experiences in software engineering, machine/deep learning, quant, data science, and cloud infrastructure. I push myself to learn the latest technologies, and am also an avid participant of hackathons as I love to build stuff. 
              </p3>
              </p>
              <p>
              <p3>
                  I strive to make an impact on whatever I do, touch the hearts of whoever I meet and make a difference with the knowledge I possess.
              </p3>
              </p>
              <p>
                <p3>
                  In my free time, I enjoy watching American/Korean comedy, spending time with family and friends and running. 
                </p3>
                </p>
                </Col>
              </Row>
            </Container>
        </div>
      </div>
    )
}

export default About;