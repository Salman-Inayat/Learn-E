import React from 'react'
import './style.css'
import {Card, Media } from 'react-bootstrap'

 

function Testimonial(){
    return(
        <div className="testimonial-container">
            <div className='container'>
                <div style={{textAlign:"center"}}>
                    <h2 style={{fontSize:'30px', marginBottom:'40px', marginLeft:'25%', width:'50%', color:'green'}}>
                        Hear from our customers
                    </h2>
                    <p style={{fontSize:'18px', marginBottom:'40px', marginLeft:'25%', width:'50%'}}>We are very proud of the service we provide and stand by every product we carry. Read our testimonials from our happy customers.</p>
                </div>
                <div className='row'>
                    <div className='col-md-4 '>
                        <Card className='test-card shadow' style={{border:'2px solid green'}}>
                            <Card.Body>
                                <img src='favicon.ico' style={{borderRadius:'40px', height:'70px', width:'70px',marginBottom:'10%'}}/>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                </p>
                                <div>
                                    <p style={{marginBottom:'0px'}}><em>Luke Jacobs</em></p>
                                    <p><em>San Antonio, Texas</em></p>
                                </div>
                            </Card.Body>
                        </Card>
                    </div>
                    <div className='col-md-4 '>
                        <Card className='test-card shadow' style={{border:'2px solid green'}}>
                            <Card.Body>
                                <img src='favicon.ico' style={{borderRadius:'40px', height:'70px', width:'70px',marginBottom:'10%'}}/>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                </p>
                                <div>
                                    <p style={{marginBottom:'0px'}}><em>Luke Jacobs</em></p>
                                    <p><em>San Antonio, Texas</em></p>
                                </div>
                            </Card.Body>
                        </Card>
                    </div>
                    <div className='col-md-4 '>
                        <Card className='test-card shadow' style={{border:'2px solid green'}}>
                            <Card.Body>
                                <img src='favicon.ico' style={{borderRadius:'40px', height:'70px', width:'70px',marginBottom:'10%'}}/>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                </p>
                                <div>
                                    <p style={{marginBottom:'0px'}}><em>Luke Jacobs</em></p>
                                    <p><em>San Antonio, Texas</em></p>
                                </div>
                            </Card.Body>
                        </Card>
                    </div>
                </div>
                <div className='row' style={{marginTop:'30px'}}>
                    <div className='col-md-4 '>
                        <Card className='test-card shadow' style={{border:'2px solid green'}}>
                            <Card.Body>
                                <img src='favicon.ico' style={{borderRadius:'40px', height:'70px', width:'70px',marginBottom:'10%'}}/>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                </p>
                                <div>
                                    <p style={{marginBottom:'0px'}}><em>Luke Jacobs</em></p>
                                    <p><em>San Antonio, Texas</em></p>
                                </div>
                            </Card.Body>
                        </Card>
                    </div>
                    <div className='col-md-4 '>
                        <Card className='test-card shadow' style={{border:'2px solid green'}}>
                            <Card.Body>
                                <img src='favicon.ico' style={{borderRadius:'40px', height:'70px', width:'70px',marginBottom:'10%'}}/>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                </p>
                                <div>
                                    <p style={{marginBottom:'0px'}}><em>Luke Jacobs</em></p>
                                    <p><em>San Antonio, Texas</em></p>
                                </div>
                            </Card.Body>
                        </Card>
                    </div>
                    <div className='col-md-4 '>
                        <Card className='test-card shadow' style={{border:'2px solid green'}}>
                            <Card.Body>
                                <img src='favicon.ico' style={{borderRadius:'40px', height:'70px', width:'70px',marginBottom:'10%'}}/>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                </p>
                                <div>
                                    <p style={{marginBottom:'0px'}}><em>Luke Jacobs</em></p>
                                    <p><em>San Antonio, Texas</em></p>
                                </div>
                            </Card.Body>
                        </Card>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Testimonial;