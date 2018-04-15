import React from 'react';
import DashBoard from './dashboard';
import Profile from './profile';
import Colleges from './my_colleges';
import TestScores from './test_score';
import Calendar from './calendar';
import Landing from './landing';

const HeadNav = () => {
  return (
    <div>
    <nav className="navbar navbar-default">
       <div classNmae="container-fluid">
          <div className="navbar-header">
             <a className="navbar-brand" href="#">Ahha! Network</a>
          </div>
          <ul className="nav navbar-nav">
             <DashBoard />
             <Profile />
             <Calendar />
          </ul>
          <ul className="nav navbar-nav navbar-right">
              <li><a href="login"><span className="glyphicon glyphicon-log-in"></span>Login</a></li>
          </ul>
       </div>
    </nav>
    <Landing />
    </div>
  );
}

export default HeadNav;
