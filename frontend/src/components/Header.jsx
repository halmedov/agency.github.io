import React from 'react';
import { Button, Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';

function Header() {
  return (
    <header id="header" className="fixed-top">
      <Container>
        <Navbar className='container d-flex align-items-center' expand="lg">
          <Navbar.Brand href="#home">
          <h1 class="logo me-auto"><a href="index.html">KEMAL CONSULTING</a></h1>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto" style={{color:'white'}}>
              <Nav.Link href="#hero" className="nav-link scrollto active" style={{color:'white'}}>Baş Sahypa</Nav.Link>
              <Nav.Link href="#about" className="nav-link scrollto" style={{color:'white'}}>Biz Barada</Nav.Link>
              <Nav.Link href="#services" className="nav-link scrollto" style={{color:'white'}}>Hyzmatlarymyz</Nav.Link>
              <NavDropdown title={<span className="text-white my-auto">Universitetler</span>}>
                <NavDropdown.Item href="#" style={{color:'black'}}>Cerrahpaşa</NavDropdown.Item>
                <NavDropdown.Item href="#" style={{color:'black'}}>Yıldız Teknik</NavDropdown.Item>
                <NavDropdown.Item href="#" style={{color:'black'}}>Istanbul Unv</NavDropdown.Item>
                <NavDropdown.Item href="#" style={{color:'black'}}>Marmara</NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="#contact" className="nav-link scrollto" style={{color:'white'}}>Habarlaşyn</Nav.Link>
              <Nav.Link href="#" className="getstarted scrollto" style={{color:'white'}}>CHAT</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </Container>
    </header>
  );
}

export default Header;
