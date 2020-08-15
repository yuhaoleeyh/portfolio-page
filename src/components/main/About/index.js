import React from 'react';
import { Card } from 'react-bootstrap';
import './css/about.scss';
import ScrollAnimation from 'react-animate-on-scroll';


const About = () => {
    return (
        <div className = "grey-colour">
          <div className = "text-center break">
              <h3> 
                ABOUT ME 
              </h3>
          </div>
          <div className = "about text-center">
          <ScrollAnimation animateIn="fadeIn">
          <Card className = "grey-colour">
          <Card.Body>
            {/* <Card.Title>Special title treatment</Card.Title> */}
            <Card.Text>
              <p3>
              Hi! My name is Yu Hao. As a self-taught developer, I believe in lifelong learning and always strive for continuous improvement. I am passionate in Software Development, DevOps, CyberSecurity and developing awesome UIs. As a member of SMU Business Intelligence Analytics and WhiteHats, I am open to learning new and emerging technologies.  
              </p3>
              <p3>
                I strive to make an impact on whatever I do, touch the hearts of whoever I meet and make a difference with the knowledge I have.
              </p3>
              <p3>
                In my free time, I enjoy listening to music, spending time with family and friends and cooking. 
              </p3>
            </Card.Text>
          </Card.Body>
        </Card>
        </ScrollAnimation>
        </div>
      </div>
    )
}

export default About;