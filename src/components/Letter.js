import React from 'react';
import '../styles/Letter.css';

const Letter = (props) => {
  return (
    <div className="letter" onClick={props.clickLetter}>
      {props.oneLetter}
    </div>
  )
};

export default Letter;
