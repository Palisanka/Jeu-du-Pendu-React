import React from "react";
import PropTypes from "prop-types";
import "./Letter.css";

const Letter = ({oneLetter, click}) => {
	return (
		<div className="letter" onClick={click}>
			{oneLetter}
		</div>
	);
};

Letter.propTypes = {
	oneLetter: PropTypes.string.isRequired,
	click: PropTypes.func.isRequired
};

export default Letter;
