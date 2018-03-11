import React from 'react';
import ReactDOM from 'react-dom';
import HeadNav from './components/head_nav';

const App = () => {
  return (
        <HeadNav />
  );
}

ReactDOM.render(<App />, document.querySelector('.container'));
