import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

function NavbarPanel() {
  return (
    <div>
      <Navbar expand="lg" className="bg-red">
        <Container className="flex justify-evenly mx-28">
          <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto flex gap-x-3">
              <Nav.Link href="/home">Home</Nav.Link>
              <Nav.Link href="/products">products</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default NavbarPanel;
