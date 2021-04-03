import React, {useEffect} from "react";
import { Nav, Navbar, NavDropdown, Form, FormControl, Button, Container } from "react-bootstrap";
import './style.css';
import { Link, animateScroll as scroll } from "react-scroll";

function Header() {
  const [scrolled,setScrolled]=React.useState(false);
  const handleScroll=() => {
    const offset=window.scrollY;
    if(offset > 80 ){
      setScrolled(true);
    }
    else{
      setScrolled(false);
    }
  }

  useEffect(() => {
    window.addEventListener('scroll',handleScroll)
  })
  let navbarClasses=['main-navbar'];
  if(scrolled){
    navbarClasses.push('scrolled');
  }

  return (
      <Navbar  expand="lg" className={navbarClasses.join(" ")} >
        <Navbar.Brand href="#home"><img src="logo.png" style={{height:'50px'}} /></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto navbar-menu">
            <li ><a href="/" className="nav-links">Home</a></li>
            <li><Link activeClass="" to="about" spy={true} smooth={true} duration={500} offset={-60} className="nav-links">About Us</Link></li>
            <li><Link activeClass="" to="feature" spy={true} smooth={true} duration={500} offset={-50}  className="nav-links">Features</Link></li>
            <li><Link activeClass="" to="testimonial" spy={true} smooth={true} duration={1000} offset={-50}  className="nav-links">Testimonials</Link></li>
            <li><Link activeClass="" to="getApp" spy={true} smooth={true} duration={1000} offset={-50}  className="nav-links">Download</Link></li>
            <li><Link activeClass="" to="contact" spy={true} smooth={true} duration={1000} offset={-50}  className="nav-links">Contact us</Link></li>

            {/* <Nav.Link href="/" >Home</Nav.Link>
            <Nav.Link  href="#about">About Us</Nav.Link>
            <Nav.Link href="#feature" >Features</Nav.Link>
            <Nav.Link href="#testimonial" >Testimonial</Nav.Link>
            <Nav.Link href="#contact" >Contact</Nav.Link>
            <Button variant="outline-success" variant='primary' href="#getApp">Download</Button> */}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
  );
}

export default Header;
