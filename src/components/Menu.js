import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import logo from "../flower.png";

const Menu = () => {
  return (
    <Navbar fixed="top" expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home" className="d-flex">
          <div className="decorative-text">V</div>
          <img src={logo} alt="flower-logo" height="30px" width="30px" />
          <div className="decorative-text">A</div>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#venue">Helyszín</Nav.Link>
            <Nav.Link href="#schedule">Menetrend</Nav.Link>
            {/* <Nav.Link href="#info">Tudnivalók</Nav.Link> */}
            <Nav.Link href="#response-form">Visszajelzés</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Menu;
