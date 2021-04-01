import  React from 'react';
import {Button} from 'react-bootstrap'
import "./style.css";

function Landing(){
    return(
        <div className="landing-container">
            <div className="row">
                <div className="col-md-5 landing-text" style={{textAlign:'start', position:'absolute', top:'40%'}}>
                    <h2>The best way to listen to music, podcast and watch videos</h2>
                    <h5>Get the app and sign-up to create an account and play your favorite artist’s latest releases and playlists.</h5>
                    <div className='row' style={{marginTop:'40px'}}>
                        <div className='col-md-4'>
                            <Button size='lg' variant='primary' style={{fontSize:'18px', padding:'10px 35px',  borderRadius:'30px'}}>Play Store</Button>
                        </div>
                        <div className='col-md-4'>
                            <Button size='lg' variant='success' style={{fontSize:'18px', padding:'10px 35px',  borderRadius:'30px'}}>App Store</Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Landing;