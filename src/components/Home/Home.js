import React from 'react';
import AboutMe from '../AboutMe/AboutMe.js';
import Header from '../Header/Header.js';
import Projects from '../Projects/Projects.js';
import Skills from '../Skills/Skills.js';
import Contact from '../Contact/Contact.js'
import Blogs from '../Blogs/Blogs.js';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <AboutMe></AboutMe>
            <Skills></Skills>
            <Projects></Projects>
            <Blogs></Blogs>
            <Contact></Contact>
            
        </div>
    );
};

export default Home;