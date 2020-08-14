import React from 'react';
import logo from './logo.svg';
import './App.css';
import NavBar from './components/common/NavBar';
import {Switch, Route, HashRouter as Router} from 'react-router-dom';
import HomePage from './components/main/HomePage';
import About from './components/main/About';
import Achievements from './components/main/Achievements';
import Projects from './components/main/Projects';
import Contact from './components/main/Contact';

function App() {
  return (
    <div>
      <Router basename = "/portfolio_website">
        {<NavBar/>}
        {/* <div><HomePage/></div> */}
        <Switch>
          <Route exact path = "/" component = {HomePage}/>
          <Route path = "/about" component = {About}/>
          <Route path = "/achievements" component = {Achievements}/>
          <Route path = "/Projects" component = {Projects}/>
          <Route path = "/contact" component = {Contact}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
