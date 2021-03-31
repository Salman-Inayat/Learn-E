import React, {useState} from 'react'
import { Carousel, CarouselItem } from "react-bootstrap";
import './style.css'

function AppCarousel() {
    const [index, setIndex] = useState(0);
  
    const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
    };
  
    return (
        <div className="carousel-section">
          <Carousel activeIndex={index} onSelect={handleSelect}>
            <Carousel.Item>
              <img
                className="d-block w-30"
                src="https://www.ekko-wp.com/static/wp-content/uploads/sites/3/2019/03/mobileapp5.jpg"
                alt="First slide"
                style={{margin:'50px auto', height:'70%'}}
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-130"
                src="https://www.ekko-wp.com/static/wp-content/uploads/sites/3/2019/03/mobileapp6.jpg"
                alt="Second slide"
                style={{margin:'50px auto'}}
              />
            </Carousel.Item>
          </Carousel>
        </div>
    );
  }
  
export default AppCarousel;
