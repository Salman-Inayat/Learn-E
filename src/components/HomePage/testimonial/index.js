import React from 'react'
import './style.css'
import {Card, Media } from 'react-bootstrap'
import {Fade} from 'react-reveal';
 

function Testimonial(){
    return(
        <div className="testimonial-container" id="testimonial">
            <div className='container'>
                <Fade bottom>
                    <div style={{textAlign:"center"}}>
                        <h2 style={{fontSize:'30px', marginBottom:'40px', marginLeft:'25%', width:'50%'}}>
                            Testimonials
                        </h2>
                        {/* <p style={{fontSize:'18px', marginBottom:'40px', marginLeft:'25%', width:'50%'}}>We are very proud of the service we provide and stand by every product we carry. Read our testimonials from our happy customers.</p> */}
                    </div>
                </Fade>

                <div className='row'>
                    <Fade bottom>
                        <div className='col-md-4 '>
                            <Card className='test-card shadow'>
                                <Card.Body>
                                    <img src='favicon.ico' style={{borderRadius:'40px', height:'70px', width:'70px',marginBottom:'10%'}}/>
                                    <p>
                                    I'm amazed by the management and whole setup of Learn-E. Helps in monitoring the progress (attendance, grades, assignments) of child, definitely worth using it. </p>
                                    <div>
                                        <p style={{marginBottom:'0px'}}><em>Malik Waqar</em></p>
                                        <p><em>Parent DAS Behra Class-9 Student</em></p>
                                    </div>
                                </Card.Body>
                            </Card>
                        </div>
                    </Fade>
                    <Fade bottom>
                    <div className='col-md-4 '>
                        <Card className='test-card shadow'>
                            <Card.Body>
                                <img src='favicon.ico' style={{borderRadius:'40px', height:'70px', width:'70px',marginBottom:'10%'}}/>
                                <p>
                                A wonderful initiative for home Schooling, our son is now enjoying and taking online classes more conveniently and with interest. It’s better than whatsapp and zoom classes.                                </p>
                                <div>
                                    <p style={{marginBottom:'0px'}}><em>Mehmood Azam</em></p>
                                    <p><em>Parent DAS Bhalwal Class 10 student</em></p>
                                </div>
                            </Card.Body>
                        </Card>
                    </div>
                    </Fade>
                    <Fade bottom>
                    <div className='col-md-4 '>
                        <Card className='test-card shadow'>
                            <Card.Body>
                                <img src='favicon.ico' style={{borderRadius:'40px', height:'70px', width:'70px',marginBottom:'10%'}}/>
                                <p>I'm amazed by the management and whole setup of Learn-E. Helps in monitoring the progress (attendance, grades, assignments) of child, definitely worth using it. </p>
                                <div>
                                    <p style={{marginBottom:'0px'}}><em>Luke Jacobs</em></p>
                                    <p><em>San Antonio, Texas</em></p>
                                </div>
                            </Card.Body>
                        </Card>
                    </div>
                    </Fade>
                </div>
                
                {/* <div className='row' style={{marginTop:'30px'}}>
                    <Fade bottom>
                    <div className='col-md-4 '>
                        <Card className='test-card shadow'>
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
                    </Fade>
                    <Fade bottom>
                    <div className='col-md-4 '>
                        <Card className='test-card shadow'>
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
                    </Fade>
                    <Fade bottom>
                    <div className='col-md-4 '>
                        <Card className='test-card shadow'>
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
                    </Fade>
                </div> */}
            </div>
        </div>
    )
}

export default Testimonial;