import React, { Component } from 'react';

import './App.css';

function App() {
  return (
    <div>
      <h3>React Router App</h3>
    </div>
  );
}

class Home extends React.Component {
    render() {
        return <div className='page'>
            <h4>Home Component</h4>
            <div className='pageContent'>This is the Home page!</div>
        </div>
    }
}
export default Home;
