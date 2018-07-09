import React, { Component } from 'react';
import { Button } from 'semantic-ui-react';
// import logo from './logo.svg';
// import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Events app</h1>
        <button className="ui icon button">
        	<i className="smile icon"></i>
        	CSS Button
        </button>
        <Button icon="smile" content="React Button" />
      </div>
    );
  }
}

export default App;
