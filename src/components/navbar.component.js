import React, { Component } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
export default class Navbarh extends Component {

  render() {
    return (
      <Navbar bg="dark" variant="dark" expand="lg">
  <Navbar.Brand href="/">Syook</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="ml-auto">
      <Nav.Link href="/">Home</Nav.Link>
      <Nav.Link href="/order">Create Order</Nav.Link>
      <Nav.Link href="/item">Create Item</Nav.Link>
      <Nav.Link href="/customer">Create customer</Nav.Link>
      <Nav.Link href="/vehicle">Create vehicle</Nav.Link>
    </Nav>
  
  </Navbar.Collapse>
</Navbar>
       
       
    );
  }
}
