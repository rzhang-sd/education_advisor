import React from 'react';
import { Message } from 'semantic-ui-react';
import HeadNav from './head_nav';

const Profile = () => {
  return (
    <div>
    <HeadNav/>

    <Message>
        <Message.Header><strong>Our Mission:</strong></Message.Header>
        <p><font color="green" size="3">To make learning more accesible to everyone. By connecting
        students to teachers, we will encourage sharing knowledge and promote a love for learing.
         </font></p>
    </Message>
    </div>
  );
}

export default Profile;
