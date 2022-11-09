import styled from "styled-components";

export const StyledForm = styled.div`
	display: flex;
	flex-direction: column;
	max-width: 400px;
	width: 100%;
	font-size: 12px;

	& label {
		letter-spacing: 1px;
		color: ${({ theme }) => theme.colors.secondary};
	}

	& input,
	& button {
		display: block;
		width: 100%;
		padding: 0.375rem 0.75rem;
		font-size: 1rem;
		line-height: 1.5;
		background-clip: padding-box;
		color: ${({ theme }) => theme.colors.primary};
		border-radius: 0.375rem;
		transition: border 0.15s ease-in-out;
	}

	& input {
		background: transparent;
		border: 2px solid ${({ theme }) => theme.colors.primary};
	}

	& input:focus {
		outline: none;
	}

	& input::placeholder {
		color: ${({ theme }) => theme.colors.placeholder};
	}

	#form-button {
		background: ${({ theme }) => theme.colors.secondary};
		border: 1px solid ${({ theme }) => theme.colors.secondary};
	}

	#form-button-container {
		margin-top: 2.5rem !important;
	}

	#confirmation-container > div {
		display: flex;
		justify-content: center;
	}

	#confirmation-container > div:nth-child(2) {
		font-size: 18px;
		letter-spacing: 3px;
	}
	#confirmation-container > div:last-child {
		color: ${({ theme }) => theme.colors.primary};
	}

	.invalid-input {
		background: none !important;
		background-clip: padding-box !important;
		border: 1px solid ${({ theme }) => theme.colors.error} !important;
	}

	.error {
		color: ${({ theme }) => theme.colors.error} !important;
		display: none;
	}

	.display {
		display: block !important;
	}

	.hide {
		display: none !important;
	}
`;
