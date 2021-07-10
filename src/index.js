import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Route, Link, BrowserRouter as Router, NavLink } from 'react-router-dom';
import About from './About'
import Contact from './Contact'

 

const routing = (
  <Router>
    <div>
      <h1>React Router Example</h1>
      <ul>
        <li>
          <NavLink to="/" exact activeStyle={{color:'red'}}>Home</NavLink>
        </li>
        <li> 
           <NavLink to="/about" exact activeStyle={{color:'green'}}>About</NavLink>
        </li>
        <li>  
          <NavLink to="/contact" exact activeStyle={{color:'magenta'}}>Contact</NavLink>
        </li>
      </ul>
      <Route exact path='/' component={App} />
      <Route path='/about' component={About} />
      <Route path='/contact' component={Contact} />
    </div>
  </Router>
)

 

ReactDOM.render(
  routing,
  document.getElementById('root')
);

 

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();