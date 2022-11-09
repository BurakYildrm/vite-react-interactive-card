import styled from "styled-components";
import imgUrl from "../../assets/bg-card-back.png";

export const StyledCardBack = styled.div`
	background-image: url(${imgUrl});
	color: ${({ theme }) => theme.colors.body};
	height: 100%;
	width: 100%;
	position: absolute;
	display: flex;
	align-items: center;
	justify-content: end;
	padding-right: 60px;
	padding-bottom: 5px;
	transform: rotateY(180deg);
	backface-visibility: hidden;
	box-shadow: 0 0 5px 2px rgba(50, 50, 50, 0.25);
	border-radius: 1rem;

	& > div {
		font-size: 14px;
		letter-spacing: 2px;
	}
`;
