import  React from 'react';
import {Button} from 'react-bootstrap'
import "./style.css";

function Download(){
    return(
        <div className="discover-container">
            <div className="row">
                <div className="col-md-5 discover-text" >
                    <h2>Watch top music videos and check out curated music video playlists.</h2>
                    <p>Get the app and sign-up to create an account and play your favorite artist’s latest releases and playlists.</p>
                    <div className='row' style={{marginTop:'40px'}}>
                        <div className='col-md-4'>
                            <Button size='lg' variant='primary' style={{fontSize:'18px', padding:'10px 20px',  borderRadius:'30px'}}>Discover more</Button>
                        </div>
                        <div className='col-md-4'>
                            <Button size='lg' variant='success' style={{fontSize:'18px', padding:'10px 20px',  borderRadius:'30px'}}>Download now</Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Download;