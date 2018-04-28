import React from 'react';
import DashBoard from './dashboard';
import Profile from './profile';
import Colleges from './my_colleges';
import TestScores from './test_score';
import Calendar from './calendar';

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
             <DashBoard />
             <Profile />
             <Calendar />
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
