import React from 'react'
import "./style.css"
import {Fade} from 'react-reveal';

function Features(){
    return(
        <div className="feature-container" id="feature">
            <div className="container">
                <Fade bottom>
                    <div style={{textAlign:"center"}}>
                        <h2 style={{fontSize:'30px', marginBottom:'40px', marginLeft:'25%', width:'50%'}}>
                            Features
                        </h2>
                    </div>
                </Fade>
                <div className="row">
                    <Fade bottom>
                    <div className="col-md-4" style={{padding:'20px 5px'}}>
                        <div className="left_feature" >
                            <div style={{textAlign:'right'}}>
                                <img src="f1.png" style={{width:'60px', height:'60px', marginBottom:'20px'}}/>
                            </div>
                            <h3 style={{marginBottom:"20px"}}>Learning Management </h3>
                            <p style={{marginBottom:'5px'}}>Recorded Lectures</p>
                            <p style={{marginBottom:'5px'}}>Online Test System</p>
                            <p style={{marginBottom:'5px'}}>Live Chat with Teachers</p>
                        </div>
                        <div className="feature-content left_feature" style={{textAlign:'right', marginBottom:'40px'}}>
                            <div style={{textAlign:'right'}}>
                                <img src="f2.png" style={{width:'60px', height:'60px', marginBottom:'20px'}}/>
                            </div>
                            <h3 style={{marginBottom:"20px"}}>Campus Management </h3>
                            <p style={{marginBottom:'5px'}}>Student Attendance</p>
                            <p style={{marginBottom:'5px'}}>Teacher Attendance</p>
                            <p style={{marginBottom:'5px'}}>Student Grades</p>
                            <p style={{marginBottom:'5px'}}>Campus Finances</p>
                            <p style={{marginBottom:'5px'}}>News Update</p>
                        </div>
                    </div>
                    </Fade> 
                    <Fade left>
                        <div className="col-md-4">
                            <img className='feature-image'  src="feature-image.png"/>
                        </div>
                    </Fade>
                    <Fade bottom>
                    <div className="col-md-4" style={{padding:'15px 5px'}}>
                        <div className="right_feature">
                            <div style={{textAlign:'left'}}>
                                <img src="f3.png" style={{width:'60px', height:'60px', marginBottom:'20px', color:'black'}}/>
                            </div>
                            <h3 style={{marginBottom:"20px"}}>Student Diary</h3>
                            <p style={{marginBottom:'5px'}}>Assignments Due</p>
                            <p style={{marginBottom:'5px'}}>Schedule of Test</p>
                            <p style={{marginBottom:'5px'}}>Routine Work</p>
                        </div>
                        <div className="right_feature">
                            <div style={{textAlign:'left'}}>
                                <img src="f4.png" style={{width:'60px', height:'60px', marginBottom:'20px'}}/>
                            </div>
                            <h3 style={{marginBottom:"20px"}}>Online Classrooms</h3>
                            <p style={{marginBottom:'5px'}}>Audio Conferencing</p>
                            <p style={{marginBottom:'5px'}}>Video Conferencing</p>
                        </div>
                    </div>
                    </Fade> 
                </div>
            </div>
        </div>
        
    )
}

export default Features