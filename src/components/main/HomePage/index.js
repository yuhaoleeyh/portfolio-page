import React, { useState, useEffect } from 'react';
import { bounce } from 'react-animations';
import styled, { css, keyframes } from 'styled-components'
import Header from '../../common/Header';
import About from '../About/index';
import Achievements from '../Achievements/index';
import Contact from '../Contact/index';
import Testimonials from '../Testimonials/index';

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
            <div className = "gradient-section">
            <About/>
            </div>
            <Testimonials/>
            <div className = "gradient-section">

            <Achievements/>
            <Contact/>
            </div>
        </div>
    )
}

export default HomePage;