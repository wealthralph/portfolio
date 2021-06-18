import React, {useState, Fragment} from 'react'
import { Navbar, Dropdown, Nav } from 'rsuite';


const Header = (
    <Navbar>
      <Navbar.Header>
        <a href="/" className="navbar-brand logo">RSUITE</a>
      </Navbar.Header>
      <Navbar.Body>
        <Nav>
          <Nav.Item >Home</Nav.Item>
          <Nav.Item>News</Nav.Item>
          <Nav.Item>Products</Nav.Item>
          <Dropdown title="About">
            <Dropdown.Item>Company</Dropdown.Item>
            <Dropdown.Item>Team</Dropdown.Item>
            <Dropdown.Item>Contact</Dropdown.Item>
          </Dropdown>
        </Nav>
        
      </Navbar.Body>
    </Navbar>
  );

export default Header ;