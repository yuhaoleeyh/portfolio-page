import React from 'react';
import { bounce } from 'react-animations';
import styled, { css, keyframes } from 'styled-components'
import Header from '../../common/Header';
import ScrollAnimation from 'react-animate-on-scroll';


const Bounce = styled.div`animation: 2s ${keyframes `${bounce}`} infinite`;

const HomePage = () => {
    return (
        <div>
            <Header/>
            <Bounce>Home</Bounce>
            <ScrollAnimation animateIn="fadeIn">
  Some Text
</ScrollAnimation>
        
        </div>
    )
}

export default HomePage;