import React from 'react'
import './style.css'
import {InputGroup, FormControl, Button } from 'react-bootstrap'

function NewsLetter(){
    return(
        <div className="newsletter">
            <h2 style={{fontSize:'30px', marginBottom:'30px', width:'50%', color:'yellow'}}>
                Subscribe to our newsletter and get the latest updates first.                
            </h2>
            <InputGroup className="mb-3" style={{width:'45%'}}>
                <FormControl
                placeholder="Enter your email address"
                aria-label="Recipient's username"
                aria-describedby="basic-addon2"
                style={{padding:'22px'}}
                />
                <InputGroup.Append>
                <Button  style={{padding:'5px 20px', backgroundColor:'blue'}}>Keep me posted</Button>
                </InputGroup.Append>
            </InputGroup>
        </div>
    )
}

export default NewsLetter;