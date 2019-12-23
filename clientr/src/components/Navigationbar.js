import React from 'react';
import { Navbar, NavItem, NavDropdown,  Nav,Image } from 'react-bootstrap';
import Button from "react-bootstrap/Button";
import {Form,FormControl }from "react-bootstrap";
import useravatar from '../img/useravatar.jpg';

const Navigationbar = ({droptitle, dropdownTitle,btns,logout ,autcheck,username}) => {
  function handleChange (eventKey){
    droptitle(eventKey);
  }
  function handlelogout (){
    logout();
  }
const navDropdownUserTitle = ( <span>{username} <Image src={useravatar} style={{ width: "40px", height:"40px" }} roundedCircle /> </span> );

    return(
        <Navbar expand="md" fixed="top"  >
        <Navbar.Brand href="/" className="custom">Mordor</Navbar.Brand>
        <Navbar.Toggle  type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation"></Navbar.Toggle>
       <Navbar.Collapse>
        <Nav className="mr-auto">
          <NavItem>
          <Nav.Link href="/">{btns.home}</Nav.Link>
          </NavItem>
          <NavItem>
          <Nav.Link href="/admin">{btns.price}</Nav.Link>
          </NavItem>
        </Nav>
        <NavDropdown title={dropdownTitle} id="basic-nav-dropdown" onSelect={handleChange}>
        <NavDropdown.Item  eventKey="1" >Русский</NavDropdown.Item>
        <NavDropdown.Item eventKey="2">English</NavDropdown.Item>
      </NavDropdown>
        <Form inline className="mt-2 mt-md-0 mr-2" >
          <FormControl type="text" placeholder={`${btns.search}...`}  className="mr-sm-2" />
          <Button variant="outline-info" className="my-2 my-sm-0 ">{btns.search}</Button>
        </Form>
        <div id="Unauthorize" hidden={autcheck===true? true : false}>
        <NavItem className="mr-sm-2">
        <Nav.Link  href="/sign-in"className="btn btn-outline-primary my-2 my-sm-0" >{btns.signin}</Nav.Link >
        </NavItem>
        <NavItem>
        <Nav.Link href="/sign-up" className="btn btn-outline-danger my-2 my-sm-0"   >{btns.register}</Nav.Link >
        </NavItem>       
         </div>
         <div id="Authorize" hidden={autcheck===true ? false : true}>
        
         <NavDropdown  title={navDropdownUserTitle}  id="basic-nav-dropdown" >
    <NavDropdown.Item  href={`/profile/${localStorage.getItem('email') || null}`} >{btns.myprofile}</NavDropdown.Item>
        <NavDropdown.Item href={`/myfanfics/${localStorage.getItem('email') || null}`}>{btns.myfanfic}</NavDropdown.Item>
        <NavDropdown.Item  href={`/addfanfics/${localStorage.getItem('email') || null}/newfanfic`} >{btns.addfanfic}</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="" onClick={handlelogout}>{btns.signout}</NavDropdown.Item>
      </NavDropdown>
         </div>
        </Navbar.Collapse>
      </Navbar>
    )
}

export default Navigationbar;