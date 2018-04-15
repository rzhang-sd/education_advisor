import {combineReducers} from 'redux';

const reducers = {
  //location: locationReducer,
}

export default function createRootReducer() {
  return combineReducers(reducers);
}
