'use client'

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

export default function BasicExample() {
    return (
      <Navbar expand="lg" className="bg-body-tertiary" sticky="top" >
            <Container>
                <Navbar.Brand href="#home">AJLORIA</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                    <Nav.Link href="https://visionboard-a.netlify.app/">VisionBoard</Nav.Link>
                    <Nav.Link href="https://cvsu-mh.onrender.com/">CVSU - Mental Health</Nav.Link>
                    <Nav.Link href="https://ajloriacodex.github.io/Animal-Persona/">Animal Persona</Nav.Link>
                    <NavDropdown title="Socials" id="basic-nav-dropdown">
                        <NavDropdown.Item href="    https://cara.app/ajloria/portfolio">Cara</NavDropdown.Item>
                        <NavDropdown.Item href="https://www.instagram.com/ajloria/">
                        Instagram
                        </NavDropdown.Item>
                        <NavDropdown.Item href="https://ph.pinterest.com/ajloriayey/_created">Pinterest</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="https://www.linkedin.com/in/alvin-loria/">Linkedin</NavDropdown.Item>
                        <NavDropdown.Item href="https://github.com/AjloriaCodex">Github</NavDropdown.Item>
                       
                    </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Container>
      </Navbar>
    );
  }
