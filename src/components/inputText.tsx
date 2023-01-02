import React from "react";
import "../App.css";
import { useFormContext } from "react-hook-form";
import PropTypes from "prop-types";

export default function InputComponent({ title, value }) {

	const method = useFormContext();

	return (
		<div className="form-input-text">
			<label><strong>{title}</strong></label>
			<input {...method.register(value)} />
		</div>

	);
}

InputComponent.propTypes = {
	title: PropTypes.string.isRequired,
	value: PropTypes.string.isRequired
};