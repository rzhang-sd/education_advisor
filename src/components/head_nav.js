import React from 'react';
import Home from './home';
import Colleges from './my_colleges';
import TestScores from './test_score';

const HeadNav = () => {
  return (
    <div>
    <nav className="navbar navbar-default">
       <div className="container-fluid">
          <div className="navbar-header">
             <h1><a className="navbar-brand">Ahha! Network</a></h1>
          </div>
          <h3>
          <ul className="nav navbar-nav">
             <Home />
             <li><a href="/profile">About Us</a></li>
             <li><a href="/news">News</a></li>
          </ul>

          <ul className="nav navbar-nav navbar-right">
              <li><a href="login"><span className="glyphicon glyphicon-log-in"></span>Login</a></li>
          </ul>
          </h3>
       </div>
    </nav>
    </div>
  );
}

export default HeadNav;
