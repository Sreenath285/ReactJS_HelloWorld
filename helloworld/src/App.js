import logo from './logo.svg';
import React from 'react';
import './App.css';

class App extends React.Component {

  constructor() {
    super();
    this.state = {
      title: 'Hello from BridgeLabz'
    }
  }
  render() {
    return (
      <div>
        <h1>{this.state.title}</h1>
        <img src={logo} alt="logo" />
      </div>
    );
  }
}

export default App;
