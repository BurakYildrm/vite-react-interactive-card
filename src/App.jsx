import GlobalStyles from "./components/styles/Global";
import Card from "./components/Card";
import Form from "./components/Form";
import { ThemeProvider } from "styled-components";
import { AppContainer } from "./components/styles/AppContainer.styled";
import { FormContainer } from "./components/styles/FormContainer.styled";
import { useState } from "react";

const theme = {
	colors: {
		body: "hsl(0, 0%, 100%)",
		error: "hsl(0, 100%, 66%)",
		primary: "hsl(270, 3%, 87%)",
		secondary: "hsl(278, 68%, 11%)",
		placeholder: "#dedddf8e",
		border: {
			from: " hsl(249, 99%, 64%)",
			to: "hsl(278, 94%, 30%)",
		},
	},
	mobile: "1000px",
	cardWidth: "447px",
	cardHeight: "245px",
};

function App() {
	const [cardNumber, setCardNumber] = useState("");
	const [holderName, setHolderName] = useState("");
	const [expiryMonth, setExpiryMonth] = useState("");
	const [expiryYear, setExpiryYear] = useState("");
	const [cvc, setCvc] = useState("");

	return (
		<ThemeProvider theme={theme}>
			<GlobalStyles />
			<AppContainer>
				<div style={{ perspective: "800px" }}>
					<Card
						creds={{
							cardNumber: cardNumber,
							holderName: holderName,
							expiryMonth: expiryMonth,
							expiryYear: expiryYear,
							cvc: cvc,
						}}
					/>
				</div>
				<FormContainer>
					<Form
						setCreds={{
							setCardNumber: setCardNumber,
							setHolderName: setHolderName,
							setExpiryMonth: setExpiryMonth,
							setExpiryYear: setExpiryYear,
							setCvc: setCvc,
						}}
						creds={{
							cardNumber: cardNumber,
							holderName: holderName,
							expiryMonth: expiryMonth,
							expiryYear: expiryYear,
							cvc: cvc,
						}}
					/>
				</FormContainer>
			</AppContainer>
		</ThemeProvider>
	);
}

export default App;
