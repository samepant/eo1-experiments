import React, { Component } from 'react';
import './App.css';
import Slideshow from './slideshow'
import Menu from './menu'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Slideshow />
        <Menu />
      </div>
    );
  }
}

export default App;
