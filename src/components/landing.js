import React from 'react';

const Landing = () => {
  return (
    <div>
      <h1>Ahha! You Got it!</h1>
      <div className="columns">
          <ul className="price">
               <li className="header">To Be A Teacher</li>
               <li className="grey"><a href="studentsignon" className="button">Sign Up</a></li>
          </ul>
      </div>
      <div className="columns">
          <ul className="price">
               <li className="header">To Be A Student</li>
               <li className="grey"><a href="teachersignon" className="button">Sign Up</a></li>
          </ul>
      </div>
    </div>
  );
}

export default Landing;
