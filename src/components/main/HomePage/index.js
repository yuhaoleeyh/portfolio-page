import React from 'react';
import { bounce } from 'react-animations';
import styled, { css, keyframes } from 'styled-components'
import Header from '../../common/Header';

const Bounce = styled.div`animation: 2s ${keyframes `${bounce}`} infinite`;

const HomePage = () => {
    return (
        <div>
            <Header/>
            <Bounce>Home</Bounce>
        </div>
    )
}

export default HomePage;