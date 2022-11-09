import React from "react";
import { StyledCardFront } from "./styles/CardFront.styled";
import imgUrl from "../assets/card-logo.svg";

export default function CardFront({
	creds: { number, name, expiryMonth, expiryYear },
}) {
	return (
		<>
			<StyledCardFront>
				<div>
					<img src={`${imgUrl}`} alt="card logo" />
				</div>
				<div>{number || "0000 0000 0000 0000"}</div>
				<div>
					<div>{(name || "Jane Appleseed").toUpperCase()}</div>
					<div>
						{expiryMonth || "00"}/{expiryYear || "00"}
					</div>
				</div>
			</StyledCardFront>
		</>
	);
}
