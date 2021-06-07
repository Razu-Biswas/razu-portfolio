import React from 'react';
import './Projects.css';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css"
import "swiper/components/navigation/navigation.min.css"
import SwiperCore, {
  Autoplay,Pagination,Navigation
} from 'swiper/core';
import En1 from '../../images/enH.jpg';
import En2 from '../../images/enSer.jpg';
import En3 from '../../images/enAd.jpg';
import Fr1 from '../../images/fsHome.jpg';
import Fr2 from '../../images/frLogin.jpg';
import Fr3 from '../../images/frDestination.jpg';
import Pl1 from '../../images/plh.jpg';
import Pl2 from '../../images/plLogin.jpg';
import Pl3 from '../../images/plOr.jpg';
import P3 from '../../images/redux1.jpg';
import P4 from '../../images/redux2.jpg';
import P5 from '../../images/redux3.jpg';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';
// import { faGithub } from '@fortawesome/free-brands-svg-icons';
SwiperCore.use([Autoplay,Pagination,Navigation]);

const Projects = () => {
    return (
        <>
            <h2 className="pt-5 container-fluid text-center heading"> <span>My Projects</span></h2>
            <div className="row project-section align-items-center container-fluid pt-5">
                <div className="col-md-6 project-slider ps-5">
                    <Swiper spaceBetween={30} centeredSlides={true} autoplay={{
                        "delay": 2500,
                        "disableOnInteraction": false
                        }} pagination={{
                        "clickable": true
                        }} navigation={true} className="mySwiper slide">
                        <SwiperSlide> <img src={En1} alt=""/> </SwiperSlide>
                        <SwiperSlide> <img src={En2} alt=""/> </SwiperSlide>
                        <SwiperSlide> <img src={En3} alt=""/> </SwiperSlide>
                        
                    </Swiper>
                </div>
                <div className="col-md-6 project-info">
                    
                    <h4 className="text-white">En-Touch Communication.(Internet Service Provider)</h4>
                    <p className="text-white"> ● A complete responsive website with a dashboard where a user can place a Purchase. </p>
                    <p className="text-white"> ● Admin can see all order lists of the users. Admin can add more services.</p>
                    <p className="text-white"> ● Admin can make a person 'Admin' by providing those person's email.</p>
                    <p className="text-white"> ● User can see his all orders and order's status..</p>
                    
                    <div className="technology-tag">

                     <a href="https://entouch-communication.web.app/">
                  <button type="button" class="btn btn-outline-warning">Live Link</button></a>

                   <a href="https://github.com/Razu-Biswas/en-touch-communication-client">
                    <button type="button" class="btn btn-outline-warning">Client Link</button></a>

                     <a href="https://github.com/Razu-Biswas/en-touch-communication-server">
                      <button type="button" class="btn btn-outline-warning">Server Link</button></a>

                        {/* <button>React.js</button>
                        <button>Node.js</button>
                        <button>Express.js</button>
                        <button>MongoDB</button>
                        <button>Stripe</button>
                        <button>Firebase</button> */}
                    </div>
                    {/* <div className="social-icon project-icon">
                        <a href="https://entouch-communication.web.app/" target="blank"><FontAwesomeIcon icon={faExternalLinkAlt}/></a>
                        <a href="https://github.com/hasanrana21/flash-shoots-client" target="blank"><FontAwesomeIcon icon={faGithub}/></a>
                    </div> */}
                </div>
            </div>

            <div className="row project-section align-items-center container-fluid pt-5">
                <div className="col-md-6 project-slider ps-5">
                    <Swiper spaceBetween={30} centeredSlides={true} autoplay={{
                        "delay": 2500,
                        "disableOnInteraction": false
                        }} pagination={{
                        "clickable": true
                        }} navigation={true} className="mySwiper slide">
                        <SwiperSlide> <img src={Fr1} alt=""/> </SwiperSlide>
                        <SwiperSlide> <img src={Fr2} alt=""/> </SwiperSlide>
                        <SwiperSlide> <img src={Fr3} alt=""/> </SwiperSlide>
                        
                    </Swiper>
                </div>
                <div className="col-md-6 project-info">
                    
                    <h4 className="text-white">Faster Riders (Riders Service)</h4>
                    <p className="text-white"> ● Faster Riders is a rider service provider website. A complete responsive minimum mobile and Desktop version. </p>
                    <p className="text-white"> ● Users can place destination locations by logging with email and password or google account and also register system.</p>
                    <p className="text-white"> ● Users select riders' service for going to a destination and are seen selecting pickup location and destination location and clicking the search button.</p>
                    <p className="text-white"> ● User See Also Her Destination for Google Map. </p>
                    
                    
                    <div className="technology-tag">
                     <a href="https://faster-riders.web.app/">
                     <button type="button" class="btn btn-outline-warning">Live Link</button></a>

                      <a href="https://github.com/Razu-Biswas/faster-riders">
                    <button type="button" class="btn btn-outline-warning">Client Link</button></a>

                     <a href="https://github.com/Razu-Biswas/faster-riders">
                      <button type="button" class="btn btn-outline-warning">Server Link</button></a>
                        {/* <button>React.js</button>
                        <button>Node.js</button>
                        <button>Express.js</button>
                        <button>MongoDB</button>
                        <button>Stripe</button>
                        <button>Firebase</button> */}
                    </div>
                    {/* <div className="social-icon project-icon">
                        <a href="https://flash-shoots-complitesite-by-hasan.netlify.app/" target="blank"><FontAwesomeIcon icon={faExternalLinkAlt}/></a>
                        <a href="https://github.com/hasanrana21/flash-shoots-client" target="blank"><FontAwesomeIcon icon={faGithub}/></a>
                    </div> */}
                </div>
            </div>

            <div className="row project-section align-items-center container-fluid pt-5">
                <div className="col-md-6 project-slider ps-5">
                    <Swiper spaceBetween={30} centeredSlides={true} autoplay={{
                        "delay": 2500,
                        "disableOnInteraction": false
                        }} pagination={{
                        "clickable": true
                        }} navigation={true} className="mySwiper slide">
                        <SwiperSlide> <img src={Pl1} alt=""/> </SwiperSlide>
                        <SwiperSlide> <img src={Pl2} alt=""/> </SwiperSlide>
                        <SwiperSlide> <img src={Pl3} alt=""/> </SwiperSlide>
                        
                    </Swiper>
                </div>
                <div className="col-md-6 project-info">
                    
                    <h4 className="text-white">Plenty Fresh (Super Shop)</h4>
                    <p className="text-white"> ● A more web page app with Orders and Admin where people can click the Buy Now button and  Customers Orders Confirm and the user sees all orders.</p>
                    <p className="text-white"> ● Admin Handle Orders and order delete .</p>
                    <p className="text-white"> ● Admins Add Products and Products Manage or delete.</p>
                    <p className="text-white"> ● And the user also shows her order date with time.</p>
                    
                    <div className="technology-tag">
                    <a href="https://plenty-fresh-server.web.app/">
                    <button type="button" class="btn btn-outline-warning">Live Link</button></a>

                     <a href="https://github.com/Razu-Biswas/plenty-fresh-shop-client">
                    <button type="button" class="btn btn-outline-warning">Client Link</button></a>

                         <a href="https://github.com/Razu-Biswas/plenty-fresh-shop-server">
                      <button type="button" class="btn btn-outline-warning">Server Link</button></a>
                    


                        {/* <button>React.js</button>
                        <button>Node.js</button>
                        <button>Express.js</button>
                        <button>MongoDB</button>
                        <button>Stripe</button>
                        <button>Firebase</button> */}
                    </div>
                    {/* <div className="social-icon project-icon">

                        <a href="https://flash-shoots-complitesite-by-hasan.netlify.app/" target="blank"><FontAwesomeIcon icon={faExternalLinkAlt}/></a>
                        <a href="https://github.com/hasanrana21/flash-shoots-client" target="blank"><FontAwesomeIcon icon={faGithub}/></a>
                    </div> */}
                </div>
            </div>





            <div className="row project-section align-items-center container-fluid pt-5">
                <div className="col-md-6 project-slider ps-5">
                    <Swiper spaceBetween={30} centeredSlides={true} autoplay={{
                        "delay": 2500,
                        "disableOnInteraction": false
                        }} pagination={{
                        "clickable": true
                        }} navigation={true} className="mySwiper slide">
                        <SwiperSlide> <img src={P3} alt=""/> </SwiperSlide>
                        <SwiperSlide> <img src={P4} alt=""/> </SwiperSlide>
                        <SwiperSlide> <img src={P5} alt=""/> </SwiperSlide>
                        
                    </Swiper>
                </div>
                <div className="col-md-6 project-info">
                    
                    <h4 className="text-white">Awesome IT Solutions Service ( Team Project(Redux))</h4>
                    <p className="text-white"> ● Awesome IT solutions Apps, Website, Software services provider website. This Website Fully responsive. This is my team Project. I have led this project. In this project we have used React Redux.</p>
                    <p className="text-white"> ● User authentication for authentication purposes we use Firebase .User can login with google account and Email or Password and Also Register Options.</p>
                    {/* <p className="text-white"> ● When a user wants to buy/order a service then he/she should click the specific button then the user will move to the order page and the user can confirm the order by filling up the order details then the user should click the order button.</p> */}
                    {/* <p className="text-white"> ● And the user also shows her order date with time.</p> */}
                    
                    <div className="technology-tag">
                    <a href="https://awesome-solutions-31e07.web.app/">
                    <button type="button" class="btn btn-outline-warning">Live Link</button></a>

                     <a href="https://github.com/Razu-Biswas/awesome-solutions">
                    <button type="button" class="btn btn-outline-warning">Code Link</button></a>

                         <a href="https://github.com/Razu-Biswas/awesome-solutions">
                      <button type="button" class="btn btn-outline-warning">Code Link</button></a>
                    


                        {/* <button>React.js</button>
                        <button>Node.js</button>
                        <button>Express.js</button>
                        <button>MongoDB</button>
                        <button>Stripe</button>
                        <button>Firebase</button> */}
                    </div>
                    {/* <div className="social-icon project-icon">

                        <a href="https://flash-shoots-complitesite-by-hasan.netlify.app/" target="blank"><FontAwesomeIcon icon={faExternalLinkAlt}/></a>
                        <a href="https://github.com/hasanrana21/flash-shoots-client" target="blank"><FontAwesomeIcon icon={faGithub}/></a>
                    </div> */}
                </div>
            </div>
        </>
    );
};

export default Projects;