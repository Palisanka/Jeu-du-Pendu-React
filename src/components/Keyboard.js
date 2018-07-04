import React, { Component } from 'react';
import Letter from './Letter.js';
import '../styles/Keyboard.css';

class Keyboard extends Component {

  onSelectedLetterHandle = () => {
    console.log("Letter clicked");
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
      <div className="keyboardBlock">
        <div className="keyboard">
          {keyboard}
        </div>
      </div>
    );
  }
}

export default Keyboard;
