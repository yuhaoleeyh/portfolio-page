import React from 'react';
import { Button } from 'react-bootstrap';
import './css/index.scss';

const Achievements = () => {
    return (
        <div className = "resume">
            <div className = "text-center col-md-12">
                <div className = "white-colour resume-break">
                    <h3 className = "line-break">TAKE A LOOK AT MY RESUME</h3>
                </div>
                <Button onClick="location.href = 'https://drive.google.com/file/d/1ldWlI_B0VzM1AyD58E_hhiAyxsTghJMG/view?usp=sharing';">Grab a copy</Button>
            </div>
        </div>
    )
}

export default Achievements;