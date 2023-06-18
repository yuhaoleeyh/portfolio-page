import React from 'react';
import {Navbar} from 'react-bootstrap'
import './index.css';

const NavBar = () => {
    return (
    <Navbar expand="lg" className = "black-class">
      <Navbar.Brand href="/portfolio_website" className = "top-nav-bar">Yu Hao Lee</Navbar.Brand>
    </Navbar>
    )
}

export default NavBar;