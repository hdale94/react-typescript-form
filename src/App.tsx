import React, { useState } from "react";
import "./App.css";
import InputComponent from "./components/inputText";
import RadioComponent from "./components/radio";
import SelectComponent from "./components/select";
import ButtonComponent from "./components/button";
import { useForm, FormProvider } from "react-hook-form";
import { ButtonContext } from "./components/context";

export default function App() {

	const methods = useForm();
	const { reset, handleSubmit } = methods;

	const [buttonState, setButtonState] = useState(0);

	function onSubmit(data) {
		if (buttonState == 1) {
			console.log(data);
		}

		else if (buttonState == 2) {
			reset();
			console.log(data);
		}
	}

	return (
		<main className="App">
			<div className="container">
				<FormProvider {...methods} >
					<form className="container-form" onSubmit={handleSubmit(onSubmit)} >
						<InputComponent value="input" title="Navn" />
						<SelectComponent value="select" />
						<RadioComponent value="radio" title="Kjønn" />
						<div className="container-form-button">
							<ButtonContext.Provider value={{ buttonState, setButtonState }} >
								<ButtonComponent text="Send" state={1} />
								<ButtonComponent text="Avbryt" state={2} />
							</ButtonContext.Provider>
						</div>
					</form>
				</FormProvider>
			</div>
		</main>
	);
}