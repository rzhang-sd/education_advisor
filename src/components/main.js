import React from 'react';
import HeadNav from './head_nav';
import Landing from './landing';
import { Image } from 'semantic-ui-react'

const Main = () => {
  return (
    <div>
        <HeadNav />
        <br/>
        <br/>
        <table cellpadding="10" height='50%'>
          <tr>
            <td>
              <img src='../image/ahha.png' height='40%' width='40%'/>
            </td>
            <td>
              <Landing/>
            </td>
          </tr>
        </table>
    </div>
  );
}

export default Main;
