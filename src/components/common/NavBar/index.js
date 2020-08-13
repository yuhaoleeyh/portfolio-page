import React from 'react';
import {Navbar, Nav} from 'react-bootstrap'
import { Link } from 'react-router-dom';
import { ScrollTo } from "react-scroll-to";

const NavBar = () => {
    return (
    <Navbar bg="light" expand="lg" className = "blue-class">
  <Navbar.Brand href="/portfolio_website">Yu Hao Lee</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="/portfolio_website/#about">About</Nav.Link>
      <Nav.Link href="/portfolio_website/#achievements">Achievements</Nav.Link>
      <Nav.Link href="/portfolio_website/#projects">Projects</Nav.Link>
      {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
      </NavDropdown> */}
      <Nav.Link href="/portfolio_website/#contact">Contact</Nav.Link>
    </Nav>
  </Navbar.Collapse>
</Navbar>
    )
}

export default NavBar;