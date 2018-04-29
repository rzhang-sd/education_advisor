import React from 'react';
import { Message } from 'semantic-ui-react';
import HeadNav from './head_nav';

const News = () => {
  return (
    <div>
    <HeadNav/>

    <Message>
        <Message.Header><strong>Ahha! Network News:</strong></Message.Header>
        <p><font color="green" size="3">[4/22/2018] Ahha! Network is actively recruiting qualified English
         teachers to teach foreign students speaking skills and to help in expanding skills
         and to help in expending their vocabulary via online media.
         </font></p>
    </Message>
    </div>
  );
}

export default News;
