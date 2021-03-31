import React from 'react'
import './style.css'
import {Button} from 'react-bootstrap'
function GetApp(){
    return(
        <div className="app-container">
            <div className="app-header" style={{textAlign:"center"}}>
                <h2 style={{fontSize:'30px', marginBottom:'40px', marginLeft:'25%', width:'50%', color:'green'}}>
                    Get the app
                </h2>
                <p style={{fontSize:'18px', marginBottom:'40px', marginLeft:'25%', width:'50%'}}>Effortlessly find new music and podcasts, discover your favorite artists' latest releases and listen to recommended stations for your mood or activity.</p>
                <div style={{display:'flex', flexDirection:'row', alignItems:'center', justifyContent:'center'}}>
                    <Button size='lg' variant='primary' style={{fontSize:'18px', padding:'10px 20px', marginRight:'2px' ,borderRadius:'30px'}}>Play Store</Button>
                    <Button size='lg' variant='success' style={{fontSize:'18px', padding:'10px 20px',  borderRadius:'30px'}}>App Store</Button>
                </div>
                <img className="test-img" src="https://www.ekko-wp.com/static/wp-content/uploads/sites/3/2019/03/mobileapp8.png"/>
            </div>
        </div>
    )
}

export default GetApp;