import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function NavBarExample() {
    return (
        
        <Navbar collapseOnSelect expand="lg" bg="dark" variant='dark'>
            <Container >
                <Navbar.Brand href="#home">Sabzlearn.ir</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#features">Features</Nav.Link>
                        <Nav.Link href="#pricing">Pricing</Nav.Link>
                        <NavDropdown title="Front-End" id="collasible-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Html</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">
                                React javascript
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Bootstrap</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">
                                Separated link
                            </NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    <Nav>
                        <Nav.Link href="#deets">More deets</Nav.Link>
                        <Nav.Link eventKey={2} href="#memes">
                            Dank memes
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavBarExample;