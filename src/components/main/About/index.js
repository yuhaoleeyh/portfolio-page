import React from 'react';
import { Card } from 'react-bootstrap';
import './css/about.scss';
import ScrollAnimation from 'react-animate-on-scroll';


const About = () => {
    return (
        <ScrollAnimation animateIn="fadeIn">
        <div>
        <div className = "text-center">
            <h4> C++ | Java | React JS | Python | PHP | HTML/CSS | Bootstrap | Git </h4>
        </div>
        <div className = "about">
        <Card>
        <Card.Header>About Me</Card.Header>
        <Card.Body>
          {/* <Card.Title>Special title treatment</Card.Title> */}
          <Card.Text>
            <p>
             As a self-taught developer, I believe in lifelong learning and always strive for continuous improvement. I strive to make an impact on whatever I do, touch the hearts of whoever I meet and make a difference with the knowledge I have. 
            </p>
            <p>
              Passionate in software development, DevOps, CyberSecurity and developing awesome UIs. Open to learning new and emerging technologies. 
            </p>
          </Card.Text>
        </Card.Body>
      </Card>
      </div>
      </div>
      </ScrollAnimation>
    )
}

export default About;