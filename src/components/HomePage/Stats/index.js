import React from 'react'
import {faSchool, faUserGraduate, faDownload} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './style.css'
import {Zoom} from 'react-reveal'

function Stats(){
    return(
        <div id="counter">
            <div className='row' style={{marginRight:'0px'}}>
                <Zoom>
                    <div className='col-md-4' style={{padding:'65px'}}>
                        <FontAwesomeIcon icon={faSchool} className="staticon" />
                        <h4>Our Schools</h4>
                        <p>8</p>
                    </div>
                </Zoom>
                <Zoom>
                    <div className='col-md-4' style={{padding:'65px'}}>
                        <FontAwesomeIcon icon={faUserGraduate} className="staticon" />
                        <h4>Our Students</h4>
                        <p>742</p>
                    </div>          
                </Zoom>
                <Zoom>
                    <div className='col-md-4' style={{padding:'65px'}}>
                        <FontAwesomeIcon icon={faDownload} className="staticon" />
                        <h4>App Downloads</h4>
                        <p>1k+</p>
                    </div>
                </Zoom>

            </div>
        </div>
    )
}

export default Stats;