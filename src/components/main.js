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
        <div className="ui grid">
          <div className="twelve wide column">
            <table cellpadding="10" height='50%'>
              <tr>
                <td>
                  <img src='../image/ahha.png' width='70%'/>
                </td>
                <td width>
                  <Landing/>
                </td>
              </tr>
            </table>
          </div>
          <div className="two wide column">
            <img className="logo" src="../image/logo.JPG"/>
          </div>
        </div>
    </div>
  );
}

export default Main;
