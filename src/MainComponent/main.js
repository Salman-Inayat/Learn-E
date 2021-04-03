import React from 'react'
import Header from './header/index'
import Footer from './footer/index'
import Layout from '../components/HomePage/index'


function MainComponent(){
    return(
        <div>
        <Header/>
        <Layout/>
        <Footer/>
        </div>
    )
}

export default MainComponent;