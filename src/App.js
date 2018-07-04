import React, { Component } from 'react';
import Letter from './components/Letter.js';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      wordToFind: "????????",
      selectedWord: "",
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

  onSelectedLetterHandle = (event) => {
    let clickedLetter = event.target.innerHTML;
    let newSelectedWord  = "";


    this.state.selectedWord.split("").forEach( (letter) => {
      if (letter == clickedLetter) {
        newSelectedWord += letter;
      } else {
        newSelectedWord += "_";
      }
    })

    this.setState({
      wordToFind: newSelectedWord
    });
  }


  newGame = () => {
    let initWord = "";
    let dicoLength = this.state.dico.length;
    let randomWordIndex = Math.floor(Math.random() * dicoLength);
    let selectedWord = this.state.dico[randomWordIndex].toUpperCase();

    const numberLetterSelectedWord = selectedWord.length;
    for (let i=0; i < numberLetterSelectedWord; i++) {
      initWord += "_";
    }
    this.setState({
      wordToFind: initWord,
      selectedWord: selectedWord
    });

    console.log("Mot à trouver est: " + selectedWord);
    return selectedWord;
  }

  render() {

    const letters = "azertyuiopqsdfghjklmwxcvbn".split("");
    const keyboard = letters.map((letter, index) => {
      return <Letter
        key={index}
        oneLetter={letter.toUpperCase()}
        click={this.onSelectedLetterHandle} />
    });

    return (
      <div className="app">
        <h1 className="title">Jeu du Pendu</h1>

        <div className="wordtofind">{this.state.wordToFind}</div>

        <div className="keyboardBlock">
          <div className="keyboard">
            {keyboard}
          </div>
        </div>

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
