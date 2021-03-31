import React from 'react'
import './style.css'
import {Button} from 'react-bootstrap'
import {faAndroid, faApple} from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {Fade} from 'react-reveal'

function GetApp(){
    return(
        <div className="app-container" id="getApp">
            <div className="app-header" style={{textAlign:"center"}}>
                <Fade bottom>
                    <h2 style={{fontSize:'30px', marginBottom:'40px', marginLeft:'25%', width:'50%'}}>
                        Get the app
                    </h2>
                </Fade>
                <Fade bottom >
                    <p style={{fontSize:'18px', marginBottom:'40px', marginLeft:'25%', width:'50%'}}>REGISTER YOUR INSTITUTION WITH LEARN-E AND START TEACHING YOUR STUDENTS ONLINE</p>
                </Fade>
                <Fade bottom >
                    <div style={{display:'flex', flexDirection:'row', alignItems:'center', justifyContent:'center'}}>
                        <Button size='lg' variant='primary' href="https://play.google.com/store/apps/details?id=com.comp"  className="get-button" ><FontAwesomeIcon icon={faAndroid} className="appicon" />Play Store</Button>
                        <Button size='lg' variant='success' href="https://play.google.com/store/apps/details?id=com.comp"  className="get-button" ><FontAwesomeIcon icon={faApple} className="appicon" />App Store</Button>
                    </div>
                </Fade>
                <Fade left>
                    <img className="test-img" src="getApp-image.png"/>
                </Fade>
            </div>
        </div>
    )
}

export default GetApp;