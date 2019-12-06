import React, { Component } from 'react';
import { Navbar, NavItem, NavDropdown, MenuItem, Nav } from 'react-bootstrap';
import Button from "react-bootstrap/Button";
import {Form,FormControl }from "react-bootstrap";
const Navigationbar = () => {
    return(
        <Navbar expand="md" fixed="top" bg="dark" variant="dark">
        <Navbar.Brand href="#home">Mordor</Navbar.Brand>
        <Navbar.Toggle  type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation"></Navbar.Toggle>
       <Navbar.Collapse>
        <Nav className="mr-auto">
          <NavItem>
          <Nav.Link href="#home">Home</Nav.Link>
          </NavItem>
          <NavItem>
          <Nav.Link href="#features">Features</Nav.Link>
          </NavItem>
          <NavItem>
          <Nav.Link href="#pricing">Pricing</Nav.Link>
          </NavItem>
        </Nav>
        <Form inline>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <Button variant="outline-info">Search</Button>
        </Form>
        <NavItem>
        <Nav.Link variant="outline-primary">Sign In</Nav.Link >
        </NavItem>
        <NavItem>
        <Nav.Link  variant="outline-danger">Register</Nav.Link >
        </NavItem>
        </Navbar.Collapse>
      </Navbar>
    )
}

export default Navigationbar;