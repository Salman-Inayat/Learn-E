import React from 'react'
import './style.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapMarker, faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons'
import {faFacebook, faTwitter, faLinkedin, faGooglePlus, faInstagram} from "@fortawesome/free-brands-svg-icons"

function Footer(){
    return(
        <footer class="footer">
            <div class="footer-left col-md-4 col-sm-6">
                <h2> Learn-E</h2>
                <p class="about">
                <span> About the company</span> 
                        Learn-E is a digital learning solution specialized for school and college going students, proudly presented by Hactric Solutions (pvt) Ltd. 
                        The purpose of this application is to make the distance learning experience facile, uncomplicated and well-ordered for students, as well as educational institutions. Along with bringing every stakeholder (Parent, Students, and Teachers) to the same page and serving as the platform for providing quality education to students.
                </p>
            </div>
            <div class="footer-center col-md-4 col-sm-6">
                <h4 style={{color:'white'}}>Site Links</h4>
                <p class="menu">
                    <a href="/"> Home</a> 
                    <a href="#about"> About Us</a> 
                    <a href="/support"> App Support</a> 
                    <a href="/privacy"> Privacy Policy</a> 
                    <a href="/terms"> Terms And Conditions</a> 
                </p>
            </div>
            <div class="footer-right col-md-4 col-sm-6">
                <h4>Contact Us</h4>
                {/* <div style={{marginBottom:'5px', display:'flex'}}>
                    <FontAwesomeIcon icon={faMapMarker} className="iconfont" />
                    <p>City, Country</p>
                </div> */}
                <div style={{marginBottom:'5px', display:'flex'}}>
                    <FontAwesomeIcon icon={faPhone} className="iconfont"/>
                    <p>+92 320 0403030</p>
                </div>
                <div style={{marginBottom:'5px', display:'flex'}}>
                    <FontAwesomeIcon icon={faEnvelope} className="iconfont"/>
                    <p><a href="#"> contact@learne.online</a></p>
                </div>
                <div class="icons">
                    <a href="https://www.facebook.com/theLearnE.online/"><FontAwesomeIcon icon={faFacebook} /></a>
                    {/* <a href="#"><FontAwesomeIcon icon={faTwitter} /></a>
                    <a href="#"><FontAwesomeIcon icon={faLinkedin}/></a>
                    <a href="#"><FontAwesomeIcon icon={faGooglePlus} /></a> */}
                    <a href="https://www.instagram.com/thelearne.online/?hl=en"><FontAwesomeIcon icon={faInstagram} /></a>
                </div>
            </div>
        </footer>
    )
}

export default Footer;