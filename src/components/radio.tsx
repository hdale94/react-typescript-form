import React from "react";
import { useFormContext } from "react-hook-form";
import PropTypes from "prop-types";

export default function RadioComponent({ title, value }) {

	const method = useFormContext();

	return (
		<div>
			<label><strong>{title}</strong></label>
			<fieldset className="form-fieldset" >
				<input type="radio" value="Mann" name="Gender" {...method.register(value)}></input>
				<label>Mann</label>
				<input type="radio" value="Kvinne" name="Gender" {...method.register(value)}></input>
				<label>Kvinne</label>
				<input type="radio" value="Annet" name="Gender" {...method.register(value)}></input>
				<label>Annet</label>
			</fieldset>
		</div>
	);
}

RadioComponent.propTypes = {
	title: PropTypes.string.isRequired,
	value: PropTypes.string.isRequired
};