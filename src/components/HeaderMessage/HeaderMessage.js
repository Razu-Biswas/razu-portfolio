import React from "react";
import Typewriter from "typewriter-effect";
import styled from "styled-components";
import Button from "react-bootstrap/Button";


const MyTitleMessage = styled.h2`
  position: absolute;
  width: 100%;
  top: 18rem;
  z-index: 1;
  margin-top: -125px;
  text-align: center;
  strong {
    font-size: 1.00em;
  }
  div {
    color: white;
    text-shadow: 0px 2px 5px rgba(0, 0, 0, 0.4);
    font-weight: 100;
    letter-spacing: 9px;
    .main {
      font-size: 40px;
    }
    .sub {
      font-size: 30px;
      letter-spacing: 2px;
    }
  }
`;

const HeaderMessage = () => (
  <MyTitleMessage>
    <div className="titleMessage">
      <div className="heading">
        <div className="main text-center mb-3">
            Welcome to  <br/> My Web-Portfolio  <br/>
          Hi, I'm
          <br />
          <span>
            <strong style={{fontSize: '45px', color:'yellow'}}>RAZU BISWAS</strong>
          </span>
          <br/>
          Front-end Developer
        </div>
        <div className="sub">
          <Typewriter
            options={{
              strings: ["Web Developer", "MongoDB", "Express JS", "React JS", "Node Js", "Lover","JavaScript"],
              autoStart: true,
              loop: true,
              delay: 50
            }}
          />
        </div>
        <div>
          <a href="https://drive.google.com/file/d/1USliY0T9aY_G2RmF7oJ-bRV8K_fcgvg7/view?usp=sharing" target="_blank" rel="noopener noreferrer">
            <Button className="m-2 text-red" variant="warning"> Download Resume </Button>
          </a>
        </div>
      </div>
    </div>
  </MyTitleMessage>
);

export default HeaderMessage;