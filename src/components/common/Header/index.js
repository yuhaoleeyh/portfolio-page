import React from 'react';
import { Jumbotron, Container } from 'react-bootstrap';
import ScrollAnimation from 'react-animate-on-scroll';
import './css/header.scss';
import Typed from 'react-typed';


const Header = () => {
    return (
    <div className = "blue-class full-content">
        <div id = "stars"></div>
        <div className = "words text-center">
        <ScrollAnimation animateIn="fadeIn">
            <Container >
                <h1>HI, I'M YU HAO</h1>
                <p1>A Singapore Management University Year 1 Computer Science Student </p1>

            </Container>
        </ScrollAnimation>
            <h2>
            <Typed
                strings={[
                    'I am a Software Engineer',
                    'I am a Back-End Developer',
                    'I am a Front-End Developer',
                    'I am a Competitive Programmer']}
                    typeSpeed={60}
                    backSpeed={30}
                    loop >
            </Typed>
            </h2>
        </div>
        {/* <h2 className = {fadeState ? "fade-in-slow" : "fade-out-slow"}>YESSSSSS</h2> */}
    </div>
    )
}

export default Header;