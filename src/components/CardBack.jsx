import React from "react";
import { StyledCardBack } from "./styles/CardBack.styled";

export default function CardBack({ cvc }) {
	return (
		<StyledCardBack>
			<div>{cvc || "000"}</div>
		</StyledCardBack>
	);
}
