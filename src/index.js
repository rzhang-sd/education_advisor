import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import createRootReducer from './RootReducer';
import App from './App';


let store;
store = createStore(createRootReducer());
ReactDOM.render(<Provider store={store}><App/></Provider>, document.getElementById('root'));
