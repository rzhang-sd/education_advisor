import React from 'react';
import { Divider } from 'semantic-ui-react'

const Landing = () => {
  return (
    <div>
      <h1>Ahha! You Got it!</h1>
      <div className="columns"></div>
      <div className="columns"></div>
      <div className="columns">
          <a href="studentsignon" className="button">To Be A Teacher</a>
      </div>
      <div className="columns"></div>
      <div className="columns">
          <a href="teachersignon" className="button">To Be A Student</a>
      </div>
      <div className="columns"></div>
      <div className="columns">
          <font color="blue" size="4"><i> Ahha! network, the right place to learn new stuff </i></font>
          <br/><br/>
          <br/><br/>
          <font color="blue" size="2"><p>&copy; 2018 ahhanetwork.com</p></font>
      </div>
    </div>
  );
}

export default Landing;
