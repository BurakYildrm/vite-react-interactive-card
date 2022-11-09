import styled from "styled-components";

export const AppContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	height: 100vh;
	gap: 3rem;

	@media (max-width: 650px) {
		gap: 2.5rem;
		justify-content: flex-start;
		scale: 0.9;
	}

	@media (max-width: 550px) {
		gap: 2rem;
		scale: 0.8;
	}

	@media (max-width: 450px) {
		gap: 1.5rem;
		scale: 0.7;
	}
`;
