import React from 'react';
import './Header.css'
import MyCarousel from '../Carousel/MyCarousel';
import HeaderMessage from '../HeaderMessage/HeaderMessage';
import Particles from 'react-particles-js';

const Header = () => {
    return (
        <div>
        {/* <Particles 
          params={{
            particles: {
              number: {
                value: 100,
                density: {
                  enable: true,
                  value_area: 1000
                }
              },
              shape: {
                type: "circle",
                stroke: {
                  width: 6,
                  color: "#f9ab00"
                }
              }
            }
          }}
        /> */}
        <MyCarousel />
       <HeaderMessage/>
      </div>
    );
};

export default Header;