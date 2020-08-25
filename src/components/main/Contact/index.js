import React from 'react';
import './css/form.scss';
import ScrollAnimation from 'react-animate-on-scroll';
import { Button, Col, Row, Container, Image } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock, faHandsHelping } from '@fortawesome/free-solid-svg-icons'

const Contact = () => {
    return (
      <div>
        <div className = "text-center break">
            <h3> 
              LET'S GET IN TOUCH
            </h3>
        </div>
        <div className = "text-center">
        
          <Container className = "bottom-break word">
            <Row>
              <Col md = {{ span: 10, offset: 1 }}>
          <p>
            <p3>
              I am always open to new opportunities for collaboration, and would love to have a chat with you! 
            </p3>
          </p>
          <Button onClick="location.href = 'https://drive.google.com/file/d/1ldWlI_B0VzM1AyD58E_hhiAyxsTghJMG/view?usp=sharing';">CONTACT ME</Button>
            
            </Col>
            </Row>
          </Container>
        </div>
      <div className = "footer text-center">
        <Container>
          <Row>
            <Col>
            HIIIII
            <ul class="list-inline social-buttons animated fadeIn">
                            {/* <!-- Facebook Button --> */}
                            <li><a id="facebook" href="https://www.facebook.com/brittany.chiang"><i class="fa fa-facebook"></i></a></li>
                            {/* <!-- Twitter Button --> */}
                            <li><a id="twitter" href="https://twitter.com/bchiang7"><i class="fa fa-twitter"></i></a></li>
                            {/* <!-- Instagram Button --> */}
                            <li><a id="instagram" href="https://instagram.com/bchiang7/" target="_blank"><i class="fa fa-instagram"></i></a></li>
                            {/* <!-- Pinterest Button --> */}
                           <li><a id="pinterest" href="https://www.pinterest.com/brittanychiang/" target="_blank"><i class="fa fa-pinterest"></i></a></li> 
                            {/* <!-- Spotify Button --> */}
                            <li><a id="spotify" href="https://play.spotify.com/user/bchiang7" target="_blank"><i class="fa fa-spotify"></i></a></li>
                            {/* <!-- Codepen Button --> */}
                            <li><a id="codepen" href="http://codepen.io/bchiang7/" target="_blank"><i class="fa fa-codepen"></i></a></li>
                            {/* <!-- GitHub Button --> */}
                            <li><a id="github" href="https://github.com/bchiang7" target="_blank"><i class="fa fa-github"></i></a></li>
                            {/* <!-- LinkedIn Button --> */}
                            <li><a id="linkedin" href="https://www.linkedin.com/in/bchiang7" target="_blank"><i class="fa fa-linkedin"></i></a></li>
                        </ul>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
    )
}

export default Contact;