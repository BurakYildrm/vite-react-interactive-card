import React, { useEffect, useRef } from "react";
import { StyledForm } from "./styles/Form.styled";
import imgUrl from "../assets/icon-complete.svg";
import { StyledCard } from "./styles/Card.styled";

export default function Form({
	setCreds: {
		setCardNumber,
		setHolderName,
		setExpiryMonth,
		setExpiryYear,
		setCvc,
	},
	creds: { cardNumber, holderName, expiryMonth, expiryYear, cvc },
}) {
	const cardNumberRef = useRef();
	const holderNameRef = useRef();
	const expiryMonthRef = useRef();
	const expiryYearRef = useRef();
	const cvcRef = useRef();

	const cardNumberErrorRef = useRef();
	const holderNameErrorRef = useRef();
	const expiryErrorRef = useRef();
	const cvcErrorRef = useRef();

	const confirmationContainer = useRef();
	const formContainer = useRef();
	const formButton = useRef();

	const errorMessages = {
		blank: "Can't be blank",
		letter: "Wrong format, letters only",
		number: "Wrong format, numbers only",
		surname: "Surname should be entered",
		incomplete: "Can't be incomplete",
	};

	const buttonText = {
		confirm: "Confirm",
		continue: "Continue",
	};

	const head = document.getElementsByTagName("head")[0];

	function handleCardNumberInput(e) {
		if (cardNumberRef.current.classList.contains("invalid-input")) {
			cardNumberRef.current.classList.remove("invalid-input");
			cardNumberErrorRef.current.classList.remove("display");
		}

		const unformattedCardNumber = cardNumberRef.current.value
			.split(" ")
			.join("");
		const formattedCardNumber = unformattedCardNumber
			? unformattedCardNumber.match(/.{1,4}/g).join(" ")
			: "";
		cardNumberRef.current.value = formattedCardNumber;

		const cardNumber = unformattedCardNumber
			? unformattedCardNumber
					.match(/.{1,4}/g)
					.join(" ")
					.toUpperCase()
			: "";

		setCardNumber(cardNumber);
	}

	function handleOnChange(e, attributeErrorRef, attributeSet) {
		if (e.target.classList.contains("invalid-input")) {
			e.target.classList.remove("invalid-input");
			attributeErrorRef.current.classList.remove("display");
		}
		attributeSet(e.target.value);
	}

	function validateForm(e) {
		e.preventDefault();
		let errorCount = 0;
		const hoverCssText = document.createTextNode(
			`.${StyledCard.styledComponentId}:hover{ transform: rotateY(180deg); }`
		);

		if (formButton.current.textContent == buttonText.continue) {
			confirmationContainer.current.classList.replace("display", "hide");
			formButton.current.textContent = buttonText.confirm;
			setHolderName("");
			setCardNumber("");
			setExpiryMonth("");
			setExpiryYear("");
			setCvc("");
			holderNameRef.current.value = "";
			cardNumberRef.current.value = "";
			expiryMonthRef.current.value = "";
			expiryYearRef.current.value = "";
			cvcRef.current.value = "";
			formContainer.current.classList.replace("hide", "display");
			head.removeChild(head.lastChild);
			return;
		}

		if (!/[a-zA-Z]+ [a-zA-Z]+/g.test(holderName)) {
			displayError(
				holderName,
				holderNameRef,
				holderNameErrorRef,
				"\\d",
				"surname"
			);
			errorCount++;
		}

		if (!/\d{4} \d{4} \d{4} \d{4}/g.test(cardNumber)) {
			displayError(
				cardNumber.split(" ").join(""),
				cardNumberRef,
				cardNumberErrorRef
			);
			errorCount++;
		}

		if (!/\d{2}/g.test(expiryMonth)) {
			displayError(expiryMonth, expiryMonthRef, expiryErrorRef);
			errorCount++;
		}

		if (!/\d{2}/g.test(expiryYear)) {
			displayError(expiryYear, expiryYearRef, expiryErrorRef);
			errorCount++;
		}

		if (!/\d{3}/g.test(cvc)) {
			displayError(cvc, cvcRef, cvcErrorRef);
			errorCount++;
		}

		if (errorCount == 0) {
			formContainer.current.classList.replace("display", "hide");
			formButton.current.textContent = buttonText.continue;
			confirmationContainer.current.classList.replace("hide", "display");
			const hoverCss = document.createElement("style");
			hoverCss.appendChild(hoverCssText);
			head.appendChild(hoverCss);
		}
	}

	function displayError(
		attribute,
		attributeRef,
		attributeErrorRef,
		regex = "\\D",
		lastErrorOption = "incomplete"
	) {
		attributeErrorRef.current.textContent =
			attribute === ""
				? errorMessages.blank
				: RegExp(`${regex}`, "g").test(attribute)
				? regex === "\\D"
					? errorMessages.number
					: errorMessages.letter
				: errorMessages[`${lastErrorOption}`];
		attributeRef.current.classList.add("invalid-input");
		attributeErrorRef.current.classList.add("display");
	}

	function flipFront() {
		const card = document.querySelector(`.${StyledCard.styledComponentId}`);

		if (!card.classList.contains("back")) {
			return;
		}

		card.classList.remove("back");
		card.style.transform = null;
	}

	function flipBack() {
		const card = document.querySelector(`.${StyledCard.styledComponentId}`);

		if (card.classList.contains("back")) {
			return;
		}

		card.classList.add("back");
		card.style.transform = "rotateY(180deg)";
	}

	return (
		<>
			<StyledForm>
				<div
					className="hide"
					id="confirmation-container"
					ref={confirmationContainer}
				>
					<div className="mb-4">
						<img src={`${imgUrl}`} alt="complete icon" />
					</div>
					<div className="mb-2">THANK YOU!</div>
					<div>We have added your card details</div>
				</div>
				<div className="display" id="form-container" ref={formContainer}>
					<div className="row mb-4">
						<div className="col-12">
							<label htmlFor="holder-name" className="mb-2">
								CARDHOLDER NAME
							</label>
							<input
								type="text"
								ref={holderNameRef}
								id="holder-name"
								className="py-2"
								placeholder="e.g. Jane Appleseed"
								autoComplete="off"
								onChange={(e) => {
									handleOnChange(e, holderNameErrorRef, setHolderName);
								}}
								onFocus={flipFront}
							/>
							<div className="error mt-2" ref={holderNameErrorRef}></div>
						</div>
					</div>
					<div className="row mb-4">
						<div className="col-12">
							<label htmlFor="card-number" className="mb-2">
								CARD NUMBER
							</label>
							<input
								type="text"
								ref={cardNumberRef}
								id="card-number"
								className="py-2"
								placeholder="e.g. 1234 5678 9123 0000"
								autoComplete="off"
								maxLength={19}
								onChange={handleCardNumberInput}
								onFocus={flipFront}
							/>
							<div className="error mt-2" ref={cardNumberErrorRef}></div>
						</div>
					</div>
					<div className="row gx-3">
						<div className="col-6">
							<label htmlFor="exp-date" className="mb-2">
								EXP. DATE &#40;MM/YY&#41;
							</label>
							<div
								id="exp-date"
								className="d-flex flex-row justify-content-between"
							>
								<div className="row g-2">
									<div className="col-6">
										<input
											type="text"
											ref={expiryMonthRef}
											id="exp-month"
											className="py-2"
											placeholder="MM"
											autoComplete="off"
											maxLength={2}
											onChange={(e) => {
												handleOnChange(
													e,
													expiryErrorRef,
													setExpiryMonth
												);
												if (e.target.value.length != 2) return;
												e.target.blur();
												expiryYearRef.current.focus();
											}}
											onFocus={flipFront}
										/>
									</div>
									<div className="col-6">
										<input
											type="text"
											ref={expiryYearRef}
											id="exp-year"
											className="py-2"
											placeholder="YY"
											autoComplete="off"
											maxLength={2}
											onChange={(e) => {
												handleOnChange(
													e,
													expiryErrorRef,
													setExpiryYear
												);
											}}
											onFocus={flipFront}
										/>
									</div>
								</div>
							</div>
							<div className="error mt-2" ref={expiryErrorRef}></div>
						</div>
						<div className="col-6">
							<label htmlFor="cvc" className="mb-2">
								CVC
							</label>
							<input
								type="text"
								ref={cvcRef}
								id="cvc"
								className="py-2"
								placeholder="e.g. 123"
								autoComplete="off"
								maxLength={3}
								onChange={(e) => {
									handleOnChange(e, cvcErrorRef, setCvc);
								}}
								onFocus={flipBack}
								onBlur={flipFront}
							/>
							<div className="error mt-2" ref={cvcErrorRef}></div>
						</div>
					</div>
				</div>
				<div className="row" id="form-button-container">
					<div className="col-12">
						<button
							id="form-button"
							className="py-2"
							onClick={validateForm}
							ref={formButton}
						>
							{buttonText.confirm}
						</button>
					</div>
				</div>
			</StyledForm>
		</>
	);
}
