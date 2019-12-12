import React, { Component} from 'react';
import './App.css';
import Home from './home'
import About from './about'
import { BrowserRouter, Route, Redirect, NavLink} from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
    <div>
      <h3>React Router App</h3>
      <nav>
        <NavLink to="/home">Home</NavLink>
        <NavLink to="/about">About</NavLink>
      </nav>
      <Redirect exact from="/" to="/home"/>
        <Route path='/home' component={Home}></Route>
        <Route path='/about' component={About}></Route>     
    </div>
    </BrowserRouter>
  );
}

export default App;
