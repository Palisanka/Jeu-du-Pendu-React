import React, { Component } from "react";
import PropTypes from "prop-types";
import "./Letter.css";

class Letter extends Component {
	constructor(props) {
		super(props);
		this.state = {
			styleLetter: {}
		};
	}

	/**
	 * handleClick - handle the click on a letter
	 * change the letter color and call the click callback
	 */
	handleClick = (evt) => {
		this.setState({ styleLetter: { background: "grey" }});
		this.props.click(evt);
	}
	
	render() {
		return (
			<div className="letter" style={this.state.styleLetter} onClick={this.handleClick}>
				{this.props.oneLetter}
			</div>
		);
	}
}

Letter.propTypes = {
	oneLetter: PropTypes.string.isRequired,
	click: PropTypes.func.isRequired
};

export default Letter;
