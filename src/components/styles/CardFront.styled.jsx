import styled from "styled-components";
import imgUrl from "../../assets/bg-card-front.png";

export const StyledCardFront = styled.div`
	color: ${({ theme }) => theme.colors.primary};
	background-image: url(${imgUrl});
	height: 100%;
	width: 100%;
	position: absolute;
	display: flex;
	flex-direction: column;
	backface-visibility: hidden;
	box-shadow: 0 0 5px 2px rgba(50, 50, 50, 0.25);
	border-radius: 1rem;

	& > div {
		flex: 1;
	}

	& > div:not(:last-child) {
		margin: 0px 20px;
	}

	& > div:not(:first-child) {
		display: flex;
		align-items: center;
	}

	& > div:first-child {
		flex: 2;
	}

	& > div:first-child > img {
		margin-top: 20px;
	}

	& > div:last-child {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		width: 100%;
		padding: 0px 20px;
		font-size: 12px;
		letter-spacing: 2.5px;
	}

	& > div:nth-child(2) {
		font-size: 28px;
		letter-spacing: 4px;
	}
`;
