import React, {useState} from "react";
import { Form, Button, Col, Row } from "react-bootstrap";
import "./style.css";
import{Fade, Zoom} from 'react-reveal'
import emailjs from 'emailjs-com';
import Alert from 'react-bootstrap/Alert'

function ContactForm() {
  let [alert,setAlert]=useState(false);

  function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm('service_8m0rnp5', 'template_ilcqog9', e.target, 'user_2QbHpaNDWzpnVwslN3mse')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      setAlert(true);
  }

 

  return (
    <div className="container" id="contact">
      <div className="row">
        <Fade left>
          <div className="col-md-6 contact-text" >
              <h2>Get your school onboard</h2>
              <h4> Contact us today</h4>
          </div>
        </Fade>
        <div className="col-md-6">
         <Zoom>
         <Form onSubmit={ sendEmail}>
           <Form.Row className="row">
             <Col>
             <Form.Control type="email" placeholder="email" name="email" required/>
             </Col>
           </Form.Row>
            <Form.Row className="row">
              <Col md={6}>
                <Form.Control type="text" placeholder="Name" name="name" required className=" contact-input"/>
              </Col>
              <Col md={6}>
                <Form.Control type="text" placeholder="Phone No." name="phone" required />
              </Col>
            </Form.Row>
            <Form.Row className="row">
              <Col md={6}>
                <Form.Control type="text" placeholder="Designation" name="designation" required className=" contact-input"/>
              </Col>
              <Col md={6}>
                <Form.Control typ="text" placeholder="Number of Students" name="number-of-students" required />
              </Col>
            </Form.Row>
            <Form.Row className="row"> 
                <Col>
                    <Form.Control typ="text" placeholder="School name" name="school-name" required />
                </Col>
            </Form.Row>
            <Form.Row className="row">
              <Col >
                <Form.Control as="textarea" rows="6" placeholder="Message" name="message" />
              </Col>
            </Form.Row>
            <Button variant="primary" type="submit" style={{padding:'5px 35px'}}>
              Submit
            </Button>
          </Form>
         </Zoom>
        </div>
      </div>
      {alert && <div class="alert alert-success alert-dismissible fade show" role="alert">
              <strong>Congrats!</strong> Your details have been submitted successfully
              <button type="button" class="close" data-dismiss="alert" aria-label="Close" 
              onClick={()=>{setAlert(false)}}>
                <span aria-hidden="true">&times;</span>
              </button>
          </div>
     }
    </div>
  );
}

export default ContactForm;
