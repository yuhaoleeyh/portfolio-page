import React from 'react';
import { Card } from 'react-bootstrap';
import './css/about.scss';
import ScrollAnimation from 'react-animate-on-scroll';


const About = () => {
    return (
        <ScrollAnimation animateIn="fadeIn">
        <div>
        <div className = "text-center break">
            <h4> About Me </h4>
        </div>
        <div className = "about text-center">
        <Card>
        <Card.Body>
          {/* <Card.Title>Special title treatment</Card.Title> */}
          <Card.Text>
            <p>
             Hi! My name is Yu Hao. As a self-taught developer, I believe in lifelong learning and always strive for continuous improvement. I am passionate in Software Development, DevOps, CyberSecurity and developing awesome UIs. Open to learning new and emerging technologies, I strive to make an impact on whatever I do, touch the hearts of whoever I meet and make a difference with the knowledge I have. 
            </p>
            <p>
              In my free time, I enjoy listening to music, spending time with family and friends and cooking. 
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