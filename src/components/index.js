import React from 'react';
import Header from './header/index'
import Landing from "./landing/index"
import Discover from "./discover/index"
import Features from './features/index'
import NewsLetter from './newsletter/index'
import Download from './download/index'
import Testimonial from './testimonial/index'
import GetApp from './get-app/index'
import AppCarousel from './carousel/index'
import Footer from './footer/index'

function Layout(){
    return(
        <div>
            <Header/>
            <Landing/>
            <Discover/>
            <Features/>
            <NewsLetter/>
            <AppCarousel/>
            <Download/>
            <Testimonial/>
            <GetApp/>
            <Footer/>
        </div>
    )
}

export default Layout;