import React from 'react';
import { Message, Icon } from 'semantic-ui-react';
import HeadNav from './head_nav';

const News = () => {
  return (
    <div>
    <HeadNav/>
    <h2>Ahha! Network News:</h2>
    <Message icon compact positive size='big'>
    <Icon name='inbox'/>
    <Message.Content>[4/22/2018] Ahha! Network is actively recruiting qualified English
     teachers to teach foreign students speaking skills and to help in expanding skills
     and to help in expending their vocabulary via online media.
     </Message.Content>
    </Message>
    </div>
  );
}

export default News;
