import  React from 'react';
import {Button} from 'react-bootstrap'
import "./style.css";
import {faAndroid, faApple} from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {Zoom} from 'react-reveal';

function Landing(){
    return(
        <div className="landing-container" >
            <div className="row">
                <Zoom>
                    <div className="col-md-5 landing-text" >
                        <h2>WELCOME TO LEARN-E</h2>
                        <h5>Digital Learning Solution Specialized for School and College going Students</h5>
                        <div className='row' style={{marginTop:'40px'}}>
                            <div className='col-md-4'>
                                <Button size='lg' variant='primary' href="https://play.google.com/store/apps/details?id=com.comp" className='landing-button'><FontAwesomeIcon icon={faAndroid} className="appicon" />Play Store</Button>
                            </div>
                            <div className='col-md-4'>
                                <Button size='lg' variant='success' href="https://play.google.com/store/apps/details?id=com.comp" className="landing-button" ><FontAwesomeIcon icon={faApple} className="appicon" />App Store</Button>
                            </div>
                        </div>
                    </div>
                </Zoom>
            </div>
        </div>
    )
}

export default Landing;