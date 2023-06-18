import React from 'react';
import Header from '../../common/Header';
import About from '../About/index';
import Achievements from '../Achievements/index';
import Contact from '../Contact/index';
import Testimonials from '../Testimonials/index';

import './css/index.scss'



const HomePage = () => {

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