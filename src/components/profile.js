import React from 'react';
import { Message } from 'semantic-ui-react';
import HeadNav from './head_nav';

const Profile = () => {
  return (
    <div>
    <HeadNav/>

        <h2>Our Mission:</h2>
        <Message compact positive size='big'>To make learning more accesible to everyone. By connecting
        students to teachers, we will encourage sharing knowledge and promote a love for learning
        </Message>
    </div>
  );
}

export default Profile;
