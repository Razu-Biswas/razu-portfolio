
import React, { useEffect } from "react";
import "./AboutMe.css";
import AOS from "aos";
import "aos/dist/aos.css";
import profile from "../../images/sat.jpg";


const AboutMe = () => {
    useEffect(() => {
        AOS.init({ duration: 1000, offset: 200 });
      }, []);
    return (
     <div>

            <header className="heading pdda text-center"><span>About Me</span></header>
            <section className="row d-flex justify-content-around display-section ">
            <div className="col-md-5 mx-auto info-box" data-aos="fade-down">
                <h4 className="heading-1" style={{ color: "white" }}>
                     I'M
          </h4>
                <h1 className="heading-2 text-warning">Razu Biswas</h1>
                <span className="design-span"></span>
                <p style={{ color: "lightgray" }} className="my-3 mt-4">
                   I'm a Front-end Developer and Familiar with work's Backend.My core skill is based on JavaScript and I love to do most of the things using JavaScript. I enjoy working with Team as a leader or member.I Always learning New technology. I enjoy it...
          </p>
              
                <a href="https://www.linkedin.com/in/razu-biswas-5907a8183/">
                    <button className="btn btn-warning">GET HIRE</button></a>
              
            </div>
            <div className="col-md-5 profile-img" data-aos="fade-left">
                <img src={profile} alt="" />
            </div>
        </section>
     </div>
    );
};

export default AboutMe;