import React from 'react';
import { Message } from 'semantic-ui-react';
import HeadNav from './head_nav';

const Contact = () => {
  return (
    <div>
    <HeadNav/>
        <h2>Contact Us: </h2>
        <p><font color="green" size="3">
        <address> Phone: 803-381-1949
        <br/>
        Email: info@ahhanetwork.com </address>
        </font></p>
    </div>
  );
}

export default Contact;
