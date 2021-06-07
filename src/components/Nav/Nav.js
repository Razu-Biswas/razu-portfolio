import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import './Nav.css';
import NavImg from '../../images/logo4.png'



const Nav = () => {
    return (
        <section className="navbar-style">
        <nav class="navbar navbar-expand-lg navbar-light">
          <div class="container-fluid imgClass">
            <a class="navbar-brand my-auto" href="/">
              <img src={NavImg} alt="img-size"/>
            </a>
            <button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
              <ul class="navbar-nav ms-auto ">
                <li class="nav-item ms-4 my-auto">
                  <Link class="nav-link text-white" to="/">
                    Home
                  </Link>
                </li>
                <li class="nav-item ms-4 my-auto">
                  <Link class="nav-link text-white" to="/about">
                    About
                  </Link>
                </li>
                <li class="nav-item ms-4 my-auto">
                  <Link class="nav-link text-white" to="/projects">
                    Projects
                  </Link>
                </li>
                <li class="nav-item ms-4 my-auto">
                  <Link class="nav-link text-white" to="/skills">
                    Skills
                  </Link>
                </li>
                <li class="nav-item ms-4 my-auto">
                  <Link class="nav-link text-white" to="/blogs">
                    Blogs
                  </Link>
                </li>
                <li class="nav-item ms-4 my-auto">
                  <Link class="nav-link text-white" to="/contact">
                    Contact
                  </Link>
                </li>
                <li class="nav-item ms-4  my-auto ">
                  <a
                    class="nav-link me-0"
                    href="https://drive.google.com/file/d/1USliY0T9aY_G2RmF7oJ-bRV8K_fcgvg7/view?usp=sharing"
                    download
                  >
                    <button className="btn btn-outline-warning">Resume</button>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </section>
    );
};

export default Nav;