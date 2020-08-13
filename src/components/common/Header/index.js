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
            <Container>
                <h1>Hi, I am Yu Hao!</h1>
                <p>A Singapore Management University Year 1 Computer Science Student </p>

            </Container>
        </ScrollAnimation>
            <Typed
                strings={[
                    'I am a software engineer',
                    'I am a back-end developer',
                    'I am a front-end developer',
                    'I am a competitive programmer']}
                    typeSpeed={60}
                    backSpeed={30}
                    loop >
            </Typed>
        </div>
        {/* <h2 className = {fadeState ? "fade-in-slow" : "fade-out-slow"}>YESSSSSS</h2> */}
    </div>
    )
}

export default Header;