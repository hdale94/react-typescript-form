import React, { useContext } from "react";
import { ButtonContext } from "./context";
import PropTypes from "prop-types";

export default function ButtonComponent({ text, state }) {

	const { setButtonState } = useContext(ButtonContext);
	
	return (
		<button className="form-button" type="submit" onClick={() => setButtonState(state)}>{text}</button>
	);
}

ButtonComponent.propTypes = {
	text: PropTypes.string.isRequired,
	state: PropTypes.bool.isRequired
};