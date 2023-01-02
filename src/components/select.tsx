import React from "react";
import { useFormContext } from "react-hook-form";
import PropTypes from "prop-types";

export default function SelectComponent({ value }) {

	const method = useFormContext();

	return (
		<div className="form-select">
			<label><strong>Land</strong></label>
			<select {...method.register(value)}>
				<option value=""></option>
				<option value="Norge">Norge</option>
				<option value="Sverige">Sverige</option>
				<option value="Danmark">Danmark</option>
			</select>
		</div>
	);
}

SelectComponent.propTypes = {
	value: PropTypes.string.isRequired
};