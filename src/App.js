import React from 'react';
import logo from './logo.svg';
import './App.css';
import NavBar from './components/common/NavBar';
import {Switch, Redirect, Route, BrowserRouter as Router} from 'react-router-dom';
import HomePage from './components/main/HomePage';
import About from './components/main/About';
import Achievements from './components/main/Achievements';
import Projects from './components/main/Projects';


function App() {
  return (
    <div>
      <Router>
        {<NavBar/>}
        <Switch>
          <Route path = "/" exact component = {HomePage}/>
          <Route path = "/about" exact component = {About}/>
          <Route path = "/achievements" exact component = {Achievements}/>
          <Route path = "/Projects" exact component = {Projects}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
