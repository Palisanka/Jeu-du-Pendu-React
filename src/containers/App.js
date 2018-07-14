import React, { Component } from 'react';
import Letter from '../components/Letter';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    // set initial state
    this.state = {
      wordOnConstruction: "",
      selectedWord: "",
      dico: ["google", "apple", "facebook", "amazon"],
      win: "",
      usedLetters: [],
    };
  }

  /**
   * componentDidMount - start the game when the component is ready
   */
  componentDidMount() {
    this.initKeyBoard();
    this.newGame();
  }

  /**
   * onSelectedLetterHandle
   * recreate the wordOnConstruction each time the user click on a letter
   * @param {event} event the click event
   */
  onSelectedLetterHandle = (event) => {
    let clickedLetter = event.target.innerHTML;
    let newWord = "";

    // recreate the wordOnConstruction
    this.state.selectedWord.split("").forEach( (letter) => { // forEach letter in the word to find
      // check if the letter match the selected letter OR match a letter already used
      if (letter === clickedLetter || this.state.usedLetters.includes(letter)) {
        newWord += letter;
        let newUsedLetters = this.state.usedLetters.concat(letter);
        // update usedLetter only if new usedLetter
        if (letter === clickedLetter) {
          this.setState({
            usedLetters: newUsedLetters
          });
        }
      } else { // add a '_' if there is no match
        newWord += "_";
      }
    })

    // update the global state
    if (newWord === this.state.selectedWord) {
      this.setState({
        win: "GAGNE !",
        wordOnConstruction: newWord
      });
    } else {
      this.setState({
        wordOnConstruction: newWord
      });
    }
  }


  /**
   * newGame - initialize a new game
   */
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
      wordOnConstruction: initWord,
      selectedWord: selectedWord,
      usedLetters: [],
      win: ""
    });
    this.initKeyBoard();

    console.log("Mot à trouver est: " + selectedWord);
  }

  initKeyBoard() {
    const letters = "azertyuiopqsdfghjklmwxcvbn".split("");
    const keyboard = letters.map((letter, index) => {
      return <Letter
        key={index}
        style={{ background: 'white' }}
        oneLetter={letter.toUpperCase()}
        click={this.onSelectedLetterHandle} />
    });
    this.setState({ keyboard })
  }



  render() {

    // const letters = "azertyuiopqsdfghjklmwxcvbn".split("");
    // const keyboard = letters.map((letter, index) => {
    //   return <Letter
    //     key={index}
    //     oneLetter={letter.toUpperCase()}
    //     click={this.onSelectedLetterHandle} />
    // });

    return (
      <div className="app">
        <h1 className="title">Jeu du Pendu</h1>
        <div className="wordtofind">{this.state.wordOnConstruction}</div>
        <div className="keyboardBlock">
          <div className="keyboard">
            {this.state.keyboard}
          </div>
        </div>
        <button className="newGameButton"
          onClick={this.newGame}>New Game</button>
        <div className="usedLetters">
          <p>Lettre utilisées : {this.state.usedLetters}</p>
        </div>
        <p className="win">{this.state.win}</p>
      </div>
    );
  }
}

export default App;
