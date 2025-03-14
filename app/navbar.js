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
                    <Nav.Link href="https://cvsu-mh.onrender.com/">CVSU Well Being Check</Nav.Link>
                    <NavDropdown title="Socials" id="basic-nav-dropdown">
                        <NavDropdown.Item href="    https://cara.app/ajloria/portfolio">Cara</NavDropdown.Item>
                        <NavDropdown.Item href="https://www.instagram.com/ajloria/">
                        Instagram
                        </NavDropdown.Item>
<<<<<<< HEAD
                        <NavDropdown.Item href="#action/3.3">linkind/NavDropdown.Item>
=======
                        <NavDropdown.Item href="https://ph.pinterest.com/ajloriayey/_created">Pinterest</NavDropdown.Item>
>>>>>>> e0951399fecf30b76a121c7dd932b56e0e4d2e14
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="https://github.com/AjloriaCodex">
                        <NavDropdown.Item href="https://github.com/AjloriaCodex"></NavDropdown.Item>
                        Github
                        </NavDropdown.Item>
                    </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Container>
      </Navbar>
    );
  }
