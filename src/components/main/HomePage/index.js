import React, { useState, useEffect } from 'react';
import { bounce } from 'react-animations';
import styled, { css, keyframes } from 'styled-components'
import Header from '../../common/Header';
import './css/index.scss'


const Bounce = styled.div`animation: 2s ${keyframes `${bounce}`} infinite`;

const HomePage = () => {
    const [user, setUser] = useState(null);
    const [number, setNumber] = useState(0);
    const fetchData = async () => {
        // NOTE: Use your username below
        fetch('https://gitconnected.com/v1/portfolio/yuhaolee97')
        .then(res => res.json())
        .then(user => {
            setUser(user);
        });
    }
    console.log(user);

    useEffect(() => {
        fetchData();
    }, [number])

    return (
        <div>
            <Header/>
            {/* <Bounce>Home</Bounce>
            <ScrollAnimation animateIn="fadeIn">
HI</ScrollAnimation> */}
        </div>
    )
}

export default HomePage;