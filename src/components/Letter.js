import React from "react";
// import PropTypes from "prop-types";
import "../styles/Letter.css";

const Letter = ({oneLetter, click, style}) => {
	return (
		<div className="letter" onClick={click} style={style}>
			{oneLetter}
		</div>
	);
};

// Letter.propTypes = {
// 	oneLetter: PropTypes.string.isRequired,
// 	click: PropTypes.func.isRequired
// };

export default Letter;
