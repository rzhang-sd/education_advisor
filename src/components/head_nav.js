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
       <div classNmae="container-fluid">
          <div className="navbar-header">
             <a className="navbar-brand" href="#">Your Best College Advisor</a>
          </div>
          <ul className="nav navbar-nav">
             <DashBoard />
             <Profile />
             <Colleges />
             <TestScores />
             <Calendar />
          </ul>
          <ul className="nav navbar-nav navbar-right">
              <li><a href="#"><span className="glyphicon glyphicon-log-in"></span>Logout</a></li>
          </ul>
       </div>
    </nav>
    <h1>Ahha! You Got it!</h1>
    <div className="columns">
        <ul className="price">
             <li className="header">To Be A Teacher</li>
             <li className="grey"><a href="#" className="button">Sign Up</a></li>
        </ul>
    </div>
    <div className="columns">
        <ul className="price">
             <li className="header">To Be A Student</li>
             <li className="grey"><a href="#" className="button">Sign Up</a></li>
        </ul>
    </div>
    </div>
  );
}

export default HeadNav;
