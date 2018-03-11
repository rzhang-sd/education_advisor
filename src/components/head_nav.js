import React from 'react';
import  DashBoard from './dashboard';
import Profile from './profile';
import Colleges from './my_colleges';
import TestScores from './test_score';
import Calendar from './calendar';

const HeadNav = () => {
  return (
    <nav className="navbar navbar-inverse">
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
  );
}

export default HeadNav;
