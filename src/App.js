import React from 'react';
import logo from './logo.svg';
import './App.css';
import NavBar from './components/common/NavBar';
import {Switch, Redirect, Route, BrowserRouter as Router} from 'react-router-dom';
import HomePage from './components/main/HomePage';
import About from './components/main/About';
import Achievements from './components/main/Achievements';
import Projects from './components/main/Projects';
import Contact from './components/main/Contact';


function App() {
  return (
    <div>
      <Router>
        {<NavBar/>}
        <div>YES I AM HERE</div>
        <Switch>
        <div>YES I AM HE2RE</div>
          <Route path = "/" exact component = {HomePage}/>
          <Route path = "/about" exact component = {About}/>
          <Route path = "/achievements" exact component = {Achievements}/>
          <Route path = "/Projects" exact component = {Projects}/>
          <Route path = "/contact" exact component = {Contact}/>
        </Switch>
        <div>YES I AM HERE3</div>
      </Router>
    </div>
  );
}

export default App;
