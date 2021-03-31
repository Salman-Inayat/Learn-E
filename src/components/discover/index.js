import React from 'react'

function Discover(){
    return(
        <div style={{padding:'50px'}}>
            <div style={{textAlign:"center"}}>
                <h2 style={{fontSize:'30px', marginLeft:'25%', width:'50%', color:'green', fontWeight:'400'}}>
                    Discover what makes us different. We define excellence - and we deliver.
                </h2>
            </div>
            <div className='row justify-content-around'>
                <div className='col-md-3 shadow' style={{marginTop:'30px', paddingTop:'30px'}}>
                    <img src="logo192.png" style={{width:'60px', height:'60px', marginBottom:'20px'}}/>
                    <h3 style={{marginBottom:"20px"}}>Music picked just for you</h3>
                    <p>Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos</p>
                </div>
                <div className='col-md-3 shadow' style={{marginTop:'30px', paddingTop:'30px'}}>
                    <img src="logo192.png" style={{width:'60px', height:'60px', marginBottom:'20px'}}/>
                    <h3 style={{marginBottom:"20px"}}>Music picked just for you</h3>
                    <p>Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos</p>
                </div>
                <div className='col-md-3 shadow' style={{marginTop:'30px', paddingTop:'30px'}}>
                    <img src="logo192.png" style={{width:'60px', height:'60px', marginBottom:'20px', color:'green'}}/>
                    <h3 style={{marginBottom:"20px"}}>Music picked just for you</h3>
                    <p>Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos</p>
                </div>
            </div>

        </div>
    )
}

export default Discover;