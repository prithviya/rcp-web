import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Image from '../../Constant/static';
import './header.css';
import { Link } from "react-router-dom";
 
function header() {
  return (
    <>
        {['md'].map((expand) => (
            <Navbar key={expand} expand={expand} className='p-0 custom_nav_sect'> 
                <Container>
                    <Navbar.Brand href="#">
                        <img src={ Image.BRAND_LOGO } width='100px' height='' alt='Logo'/>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
                    <Navbar.Offcanvas
                    id={`offcanvasNavbar-expand-${expand}`}
                    aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                    placement="end"
                    >
                    <Offcanvas.Header closeButton>
                        <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                        RCP Logo
                        </Offcanvas.Title>
                    </Offcanvas.Header>
                    <Offcanvas.Body>
                        <Nav className="justify-content-end flex-grow-1 pe-3">
                            <Nav.Link>
                                <Link to="/" className='custom_navlink'>Home</Link>
                            </Nav.Link>
                            <Nav.Link>
                                <Link to="/abt" className='custom_navlink'>About</Link>
                            </Nav.Link>
                            <Nav.Link>
                                <Link to="/academics" className='custom_navlink'>Academics</Link>
                            </Nav.Link>
                            <Nav.Link href="">
                                Infrastructure
                            </Nav.Link>
                            <Nav.Link href="">
                                Admission
                            </Nav.Link>
                            <Nav.Link href="">
                                Life @ RCP
                            </Nav.Link>
                            <Nav.Link href="">
                                Contact
                            </Nav.Link>                  
                        </Nav>  
                    </Offcanvas.Body>
                </Navbar.Offcanvas>
            </Container>
        </Navbar>
      ))}
    </>
  )
}

export default header