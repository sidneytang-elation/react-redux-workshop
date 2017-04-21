import React, { Component } from 'react';
import MessageViewer from './components/MessageViewer';
import logo from './logo.svg';
import './App.css';

import messages from './data/messages';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React/Redux/ES6</h2>
        </div>
        <MessageViewer messages={messages}/>
      </div>
    );
  }
}

export default App;
