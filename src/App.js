import React, { Component } from 'react';
import Keyboard from './components/Keyboard.js';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      wordToFind: "???",
      dico: ["google", "apple", "facebook", "amazon"]
    };
  }

  // getTheKeyCode = (e) => {
  //   switch (e.key) {
  //     case 65:
  //       console.log('Touche appuyée: ' + e.key);
  //       break;
  //     case 90:
  //       console.log('Touche appuyée: ' + e.key);
  //       break;
  //     default:
  //       console.log('Sorry, you have to select only letters from A to Z');
  //   }
  //   e.preventDefault();
  // }


  newGame = () => {
    let dicoLength = this.state.dico.length;
    let randomWordIndex = Math.floor(Math.random() * dicoLength);
    let selectedWord = this.state.dico[randomWordIndex].toUpperCase();

    console.log("Mot à trouver est: " + selectedWord);
    return selectedWord;
  }

  render() {
    return (
      <div className="app">
        <h1 className="title">Jeu du Pendu</h1>

        <div className="wordtofind">{this.state.wordToFind}</div>

        <Keyboard />

        <button className="newGameButton"
          onClick={this.newGame}>New Game</button>

        <div className="usedLetters">
          <p>Lettre utilisées : ...</p>
        </div>

        <div className="win">
          <p>Bien joué le mot à deviner est bien ...</p>
        </div>

      </div>
    );
  }
}

export default App;
