
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Nav from './components/Nav/Nav.js';
import Home from './components/Home/Home.js';
import AboutMe from './components/AboutMe/AboutMe';
import Projects from './components/Projects/Projects';
import Contact from './components/Contact/Contact';
import Skills from './components/Skills/Skills';
import Blogs from './components/Blogs/Blogs';


function App() {
  return (
    <Router>
      <Nav></Nav>
    <Switch>
      <Route exact path="/">
       <Home></Home>
      </Route>
      <Route exact path="/about">
       <AboutMe></AboutMe>
      </Route>
      <Route path="/blogs">
        <Blogs />
      </Route>
      <Route path="/skills">
        <Skills />
      </Route>
      <Route path="/contact">
        <Contact />
      </Route>
      <Route path="/projects">
        <Projects />
      </Route>
      <Route path="/">
        
      </Route>
    </Switch>
  </Router>
  );
}

export default App;
