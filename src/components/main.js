import React from 'react';
import HeadNav from './head_nav';
import Landing from './landing';
import { Image } from 'semantic-ui-react'

const Main = () => {
  return (
    <div>
        <HeadNav />
        <table cellpadding="10" height='50%'>
          <tr>
            <td width='40%'>
              <img src='../image/ahha.png' width='70%'/>
            </td>
            <td width='60%'>
              <Landing/>
            </td>
          </tr>
        </table>
    </div>
  );
}

export default Main;
