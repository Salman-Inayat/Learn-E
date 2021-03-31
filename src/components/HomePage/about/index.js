import React from 'react'
import { Fade } from 'react-reveal'
import './style.css'

function About(){
    return(
        
            <div className="container" id="about" className="about-container">
                <Fade bottom>
                <div style={{textAlign:"center"}}>
                    <h2 style={{fontSize:'30px', marginLeft:'25%', width:'50%'}}>
                        About Us
                    </h2>
                    <p className="about-para" >Learn-E is a digital learning solution specialized for school and college going students, proudly presented by Hactric Solutions (pvt) Ltd. 
                        The purpose of this application is to make the distance learning experience facile, uncomplicated and well-ordered for students, as well as educational institutions. Along with bringing every stakeholder (Parent, Students, and Teachers) to the same page and serving as the platform for providing quality education to students.</p>
                </div>
                <div className='row'>
                    <div className='col-md-4' style={{marginTop:'30px'}}>
                        <img src="easy.jpg" style={{width:'60px', height:'60px', marginBottom:'20px'}}/>
                        <h3 style={{marginBottom:"20px"}}>Easy To Use</h3>
                    </div>
                    <div className='col-md-4' style={{marginTop:'30px'}}>
                        <img src="friendly.png" style={{width:'60px', height:'60px', marginBottom:'20px'}}/>
                        <h3 style={{marginBottom:"20px"}}>Student Friendly UI</h3>
                    </div>
                    <div className='col-md-4' style={{marginTop:'30px'}}>
                        <img src="cheap.png" style={{width:'60px', height:'60px', marginBottom:'20px'}}/>
                        <h3 style={{marginBottom:"20px"}}>Cheap and Accessible</h3>
                    </div>
                </div>
                </Fade>

            </div>
    )
}

export default About;