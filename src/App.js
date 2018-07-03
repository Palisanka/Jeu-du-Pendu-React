import React, { Component } from 'react';
import Letter from './Letter.js';
import Keyboard from './Keyboard.js';
import WordToFind from './WordToFind.js';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      words: ["facebook", "google", "amazon"]
    }
  }
  render() {
    return (
      <div className="App">
        <h1 className="Title">Jeu du Pendu</h1>
        <WordToFind />
        <Keyboard />
      </div>
    );
  }
}

export default App;
