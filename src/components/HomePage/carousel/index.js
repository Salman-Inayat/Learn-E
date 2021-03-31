import React, {useState} from 'react'
// import { Carousel, CarouselItem } from "react-bootstrap";
import './style.css'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import {Fade} from 'react-reveal'

function AppCarousel() {
    const [index, setIndex] = useState(0);
  
    const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
    };
  
    const CustomDots = ({onClick, active, index, carouselState}) => {
      // const { currentSlide } = carouselState
      return(
        <li style={{ background: active ? "grey" : "initial" }} className="customDots">
          <a
            style={{ background: active ? "grey" : "initial" }}
            onClick={() => onClick()}>
            <span style={{'border-radius': '50%', width: '3px'}}></span>
          </a>
        </li>
      )
    }

    const responsive = {
      desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 3,
        slidesToSlide: 1 // optional, default to 1.
      },
      tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 1,
        slidesToSlide: 1 // optional, default to 1.
      },
      mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1,
        slidesToSlide: 1 // optional, default to 1.
      }
    };

    return (
        <div className="carousel-section row">
        <Fade left>
          <div className="carousel-info col-md-2 col">
            <h4>App screenshots</h4>
            <h4>This is how our app look like</h4>
          </div>
        </Fade>
        <div className=" col-md-10" style={{'overflow-x': 'hidden'}}>
          <img className="carousel-frame" src="https://www.ekko-wp.com/static/wp-content/uploads/sites/3/2019/03/mobileapp3.png"/>
          <Carousel 
            swipeable={false}
            draggable={true}
            showDots={true}
            arrows={false}
            responsive={responsive}
            ssr={true} // means to render carousel on server-side.
            infinite={true}
            autoPlaySpeed={1000}
            // partialVisible={true}
            keyBoardControl={true}
            // customDot={<CustomDots/>}
            transitionDuration={500}
            renderDotsOutside={true}
            className="carousel"
            dotListClass="custom-dot-list"
          >
            <div className="carousel-items">
              <img
                className="d-block w-30"
                src="c1.png"
                alt="First slide"
                style={{margin:'50px auto', height:'40%'}}
              />
            </div>
            <div className="carousel-items">
              <img
                className="d-block w-130"
                src="cn1.png"
                alt="Second slide"
                style={{margin:'50px auto'}}
              />
            </div>
            <div className="carousel-items">
              <img
                className="d-block w-30"
                src="c3.png"
                alt="First slide"
                style={{margin:'50px auto', height:'70%'}}
              />
            </div>
            <div className="carousel-items">
              <img
                className="d-block w-130"
                src="c2.png"
                alt="Second slide"
                style={{margin:'50px auto'}}
              />
            </div>
            <div className="carousel-items">
              <img
                className="d-block w-130"
                src="cn4.png"
                alt="Second slide"
                style={{margin:'50px auto'}}
              />
            </div>
          </Carousel>
          </div>
        </div>
    );
  }
  
export default AppCarousel;