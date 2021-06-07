import React from 'react';
import './Skills.css';
import 'boxicons';

const Skills = () => {
    return (
        <section>
            {/* <header className="heading pdda text-center"><span>Skills</span></header> */}
            {/* <div className="skill">
            <div className="set">
               
                    <span className="fas fa-globe"></span>
                    <header>Web Development</header>
                    <div className="list">
                        <label>Html</label>
                        <i className="fab fb-html5"></i>
                    </div>
                    <div className="list">
                        <label>Css</label>
                        <i className="fab fb-css3-alt"></i>
                    </div>
                    <div className="list">
                        <label>JavaScript</label>
                        <i className="fab fb-js"></i>
                    </div>
                    <div className="list">
                        <label>ES6</label>
                        <i className="fab fb-php"></i>
                    </div>
               
            </div>

            <div className="set">
               
                    <span className="fas fa-tools"></span>
                    <header>FrameWork</header>
                    <div className="list">
                        <label>MATERIAL UI</label>
                        <i className="fab fb-laravel"></i>
                    </div>
                    <div className="list">
                        <label>Node.jS</label>
                        <i className="fab fb-node-js"></i>
                    </div>
                    <div className="list">
                        <label>Angular</label>
                        <i className="fab fb-angular"></i>
                    </div>
                    <div className="list">
                        <label>BootStrap</label>
                        <i className="fab fb-bootstrap"></i>
                    </div>
                
            </div>
                <div className="set">
                    <span className="fas fa-mobile-alt"></span>
                    <header>OTHERS </header>
                    <div className="list">
                        <label>EXPRESS.JS</label>
                        <i className="fab fb-android"></i>
                    </div>
                    <div className="list">
                        <label>MONGO DB</label>
                        <i className="fab fb-apple"></i>
                    </div>
                    <div className="list">
                        <label>MONGOS</label>
                        <i className="fab fb-React"></i>
                    </div>
                    <div className="list">
                        <label>D3 CHARTS</label>
                        <i className="fab fb-React"></i>
                    </div>
                </div>
           
            </div> */}

<div className="row">
            <div className="skills">
                <h1 className="text-center skill">My Skills</h1>
                <li>
                    <h5>Html</h5><span className="bar"><span className="html"></span></span>
                </li>
                <li>
                    <h5>Css</h5><span className="bar"><span className="css"></span></span>
                </li>
                <li>
                    <h5>JavaScript</h5><span className="bar"><span className="jquery"></span></span>
                </li>
                <li>
                    <h5>React.Js</h5><span className="bar"><span className="react"></span></span>
                </li>
                <li>
                    <h5>Express.Js</h5><span className="bar"><span className="express"></span></span>
                </li>
                <li>
                    <h5>Node.Js</h5><span className="bar"><span className="node"></span></span>
                </li>
            </div>
        </div>
            

        </section>
   
    );
};

export default Skills;