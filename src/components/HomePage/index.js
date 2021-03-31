import React from 'react';
import Landing from "./landing/index"
import About from "./about/index"
import Features from './features/index'
import NewsLetter from './newsletter/index'
import Download from './download/index'
import Testimonial from './testimonial/index'
import GetApp from './get-app/index'
import AppCarousel from './carousel/index'
import ContactForm from './ContactForm/index'
import Stats from './Stats/index'

function Layout(){
    return(
        <div>
            <Landing/>
            <About/>
            <Features/>
            {/* <NewsLetter/> */}
            <AppCarousel/>
            {/* <Download/> */}
            <Testimonial/>
            <Stats/>
            <GetApp/>
            <ContactForm/>
        </div>
    )
}

export default Layout;