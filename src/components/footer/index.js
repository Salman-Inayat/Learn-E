import React from 'react'
import './style.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapMarker, faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons'
import {faFacebook, faTwitter, faLinkedin, faGooglePlus, faInstagram} from "@fortawesome/free-brands-svg-icons"

function Footer(){
    return(
        <footer class="footer">
            <div class="footer-left col-md-4 col-sm-6">
                <h2> Company</h2>
                <p class="menu">
                    <a href="#"> Home</a> 
                    <a href="#"> About Us</a> 
                    <a href="#"> App Support</a> 
                    <a href="#"> Privacy Policy</a> 
                    <a href="#"> Terms And Conditions</a> 
                </p>
            </div>
            <div class="footer-center col-md-4 col-sm-6">
                <div style={{marginBottom:'5px'}}>
                    <FontAwesomeIcon icon={faMapMarker} className="iconfont" />
                    <p>City, Country</p>
                </div>
                <div style={{marginBottom:'5px'}}>
                    <FontAwesomeIcon icon={faPhone} className="iconfont"/>
                    <p> (+00) 0000 000 000</p>
                </div>
                <div style={{marginBottom:'5px'}}>
                    <FontAwesomeIcon icon={faEnvelope} className="iconfont"/>
                    <p><a href="#"> office@company.com</a></p>
                </div>
            </div>
            <div class="footer-right col-md-4 col-sm-6">
                <p class="about">
                <span> About the company</span> Ut congue augue non tellus bibendum, in varius tellus condimentum. In scelerisque nibh tortor, sed rhoncus odio condimentum in. Sed sed est ut sapien ultrices eleifend. Integer tellus est, vehicula eu lectus tincidunt,
                ultricies feugiat leo. Suspendisse tellus elit, pharetra in hendrerit ut, aliquam quis augue. Nam ut nibh mollis, tristique ante sed, viverra massa.
                </p>
                <div class="icons">
                    <a href="#"><FontAwesomeIcon icon={faFacebook} /></a>
                    <a href="#"><FontAwesomeIcon icon={faTwitter} /></a>
                    <a href="#"><FontAwesomeIcon icon={faLinkedin}/></a>
                    <a href="#"><FontAwesomeIcon icon={faGooglePlus} /></a>
                    <a href="#"><FontAwesomeIcon icon={faInstagram} /></a>
                </div>
            </div>
        </footer>
    )
}

export default Footer;