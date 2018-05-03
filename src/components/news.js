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
     teachers to teach foreign students speaking skills and to help in expanding their vocabulary via online media.
     </Message.Content>
    </Message>
    <Message>
      <Message.Header>Ahha! Network is recruiting English tutors who are responsible with good time management for some leading education and technology companies in China.
 The companies use cutting edge technology and accredited materials for tutors to deliver classes to children.
     </Message.Header>
     <br/>
     <Message.Header>Benefits:</Message.Header>
     <Message.List>
      <Message.Item>Competitive pay rate between $15 -$25 per hour</Message.Item>
      <Message.Item>Flexible scheduling</Message.Item>
    </Message.List>
    <br/>
    <Message.Header>Requirements:</Message.Header>
    <Message.List>
     <Message.Item>Native English Speaker from Canada, and US</Message.Item>
     <Message.Item>Bachelor’s Degree in any field OR enrolment in a bachelor’s program</Message.Item>
     <Message.Item>Availability from Tuesday to Friday: 2:00am-7:00am, Saturday to Sunday: 5:00am – 7:00pm US Pacific time</Message.Item>
     <Message.Item>Computer with a Windows 7 or Higher and Stable internet access (preferred wired connection using cable)</Message.Item>
     <Message.Item>Commitment to teaching a minimum of one complete semester (4 months)</Message.Item>
     <Message.Item>Be a professional and responsible</Message.Item>
     <Message.Item>TESOL | TESL | TEFL | IELTS Certification (plus)</Message.Item>
     <Message.Item>Experience teaching ESOL | English to young learners (plus)</Message.Item>
   </Message.List>
   <br/>
Please send your CV and a headshot (suitable for teaching profile) today
<br/>
(text and email)! <strong>info@ahhanetwork.com
<br/>
www.ahhanetwork.com
<br/>
Phone: (803) 381-1949</strong>

    </Message>
    </div>
  );
}

export default News;
