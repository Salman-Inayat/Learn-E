import React, {useState} from "react";
import { Nav, Navbar, NavDropdown, Form, FormControl, Button } from "react-bootstrap";
import './style.css';

function Header() {
    const [show, setShow] = useState(false);
    const showDropdown = (e)=>{
        setShow(!show);
    }
    const hideDropdown = e => {
        setShow(false);
    }

  return (
      <Navbar fixed="top" expand="lg" style={{padding:'20px 50px', backgroundColor:'rgb(14, 129, 14)'}}>
        <Navbar.Brand href="#home" style={{color:'yellow'}}>Learn-E</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link href="#home" style={{color:'yellow'}}>Home</Nav.Link>
            <Nav.Link href="#link" style={{color:'yellow'}}>About Us</Nav.Link>
            <Nav.Link href="#link" style={{color:'yellow'}}>Support</Nav.Link>
            <Nav.Link href="#link" style={{color:'yellow'}}>Privacy Policy</Nav.Link>
            {/* <NavDropdown title="Demos" id="basic-nav-dropdown" className='dropdown'  
            show={show}
            onMouseEnter={showDropdown} 
            onMouseLeave={hideDropdown}
            style={{color:'white'}}>
              <NavDropdown.Item href="#action/3.1" className="drop-menu" style={{backgroundColor:'green'}}>Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2" className="drop-menu">Another action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3" className="drop-menu">Something</NavDropdown.Item>
            </NavDropdown> */}
            <Button variant="outline-success" variant='primary'>Contact Us</Button>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
  );
}

export default Header;
