import React from 'react';
import './Blogs.css';
import image1 from '../../images/1.png';
import image2 from '../../images/2.png';
import image3 from '../../images/3.jpg';

const Blogs = () => {
    return (
        <div className="body">
            <header className="heading text-center"><span>Blogs</span></header>
            <ul class="list">
                <li class="list-item">
                    <div class="list-content">
                        <h3>Various discussions of React</h3>
                        <img src={image1} alt="" />
                        <p>React is a javascript library. It is a declarative, efficient, and flexible javascript library. It developed by Facebook. It’s also components-based architecture. But it’s not a framework.</p>
                        <a href="https://sreekantaraju3421.medium.com/various-discussions-of-react-d61ef9b759f1"><button type="button" class="btn btn-outline-primary">Read More</button></a>
                    </div>
                </li>
                <li class="list-item">
                    <div class="list-content">
                        <h3> JavaScript interesting Story</h3>
                        <img src={image2} alt="" />
                        <p>Usually bindings occur whenever we declare or set value in a variable. For example we use var, let and const to declare or assign a variable.</p>
                        <a href="https://sreekantaraju3421.medium.com/some-javascript-story-f89b19ac14d1"><button type="button" class="btn btn-outline-primary">Read More</button></a>
                    </div>
                </li>
                <li class="list-item">
                    <div class="list-content">
                        <h3>JavaScript Interview Questions</h3>
                        <img src={image3} alt="" />
                        <p>JavaScript is a lightweight, interpreted programming language with object-oriented capabilities that allows you to build interactivity into otherwise static HTML pages.</p>
                        <a href="https://sreekantaraju3421.medium.com/javascript-most-important-interview-questions-6f061dc39f01"><button type="button" class="btn btn-outline-primary">Read More</button></a>
                    </div>
                </li>

            </ul>
        </div>
    );
};

export default Blogs;