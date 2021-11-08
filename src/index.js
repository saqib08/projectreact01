import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';

import Navbar from './Navbar';
import Home from './Home';
import About from './About';
// import State from './components/State';

import {
  BrowserRouter as Router,

  Route,
 
} from "react-router-dom";
import Contact from './Contact';

ReactDOM.render(
  <React.StrictMode>
   
    <Router>
    <Navbar/>
  
 
    {/* <Link to="/">Home</Link> */}
    {/* <Link to="/about">About</Link> */}
   
    <Route exact path="/" component={Home}/>
    <Route path="/about" component={About}/>
    <Route path="/contact" component={Contact}/>
    
   
     
    </Router>
    {/* <State/> */}
  
  </React.StrictMode>,
  document.getElementById('root')
  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
