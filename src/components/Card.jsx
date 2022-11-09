import React from "react";
import CardFront from "./CardFront";
import CardBack from "./CardBack";
import { StyledCard } from "./styles/Card.styled";

export default function Card({
	creds: { cardNumber, holderName, expiryMonth, expiryYear, cvc },
}) {
	return (
		<>
			<StyledCard>
				<CardFront
					creds={{
						number: cardNumber,
						name: holderName,
						expiryMonth: expiryMonth,
						expiryYear: expiryYear,
					}}
				/>

				<CardBack cvc={cvc} />
			</StyledCard>
		</>
	);
}
