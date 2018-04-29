import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import {connect} from 'react-redux';
import Main from './components/main';
import SignOnForm from './components/signon';
import News from './components/news';
import Profile from './components/profile'

export function App({onLocation}) {

  function onRouter(router) {
    router.history.listen(onLocation);
  }

  return (
        <BrowserRouter ref={onRouter}>
           <div>
              <Switch>
                  <Route exact path='/' component={Main} />
                  <Route exact path='/studentsignon' component={SignOnForm} />
                  <Route exact path='/teachersignon' component={SignOnForm} />
                  <Route exact path='/news' component={News} />
                  <Route exact path='/profile' component={Profile} />
              </Switch>
           </div>
         </BrowserRouter>
       );
}

function stateMapper(state, props) {
  return {
  }
}

function actionMapper(dispatch, props) {
  return {
    //onLocation: location => dispatch(setLocation(location))
  }
}

export default connect(stateMapper, actionMapper)(App);
