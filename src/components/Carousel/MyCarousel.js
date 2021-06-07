import React from 'react';
import Slide1 from '../../images/mouse1.jpg';
import Slide2 from '../../images/mouse4.jpg';
import Slide3 from '../../images/mouse5.jpg';
import { Carousel } from 'react-bootstrap';
import './MyCarousel.css';


const MyCarousel = () => {
    return (
        <div id="home">
         <Carousel controls={false} indicators interval={5500} pause={false}>
          <Carousel.Item className="custom-img">
            <img className="d-block w-100 custom-img" src={Slide1} alt="First slide" />
          </Carousel.Item >
           <Carousel.Item className="custom-img">
            <img className="d-block w-100 custom-img" src={Slide2} alt="Third slide" />
          </Carousel.Item>
          <Carousel.Item className="custom-img">
            <img className="d-block w-100 custom-img" src={Slide3} alt="Third slide" />
          </Carousel.Item>
        </Carousel>
        
      </div>
    );
};

export default MyCarousel;