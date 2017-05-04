import React, { Component } from 'react';
import { Provider } from 'react-redux';
import store from './store';
import MessageViewer from './components/MessageViewer';
import logo from './logo.svg';
import './App.css';


class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <div className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h2>Welcome to React/Redux/ES6</h2>
          </div>
          <MessageViewer />
        </div>
      </Provider>
    );
  }
}

export default App;
