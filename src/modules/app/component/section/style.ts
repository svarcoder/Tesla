import styled from "styled-components";

interface Props {
	bgImage: any;
}

export const Wrap = styled.div<Props>`
	width: 100vw;
	height: 100vh;
	background-image: ${(props) => `url(${props.bgImage})`};
	background-position: center;
	background-size: cover;
	background-repeat: no-repeat;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: center;
`;

export const ItemText = styled.div`
	padding-top: 15vh;
	text-align: center;
`;

export const ButtonGroup = styled.div`
	display: flex;
	margin-bottom: 30px;
	@media (max-width: 768px) {
		flex-direction: column;
	}
`;

export const LeftButton = styled.div`
	background-color: rgba(23, 26, 32, 0.8);
	height: 40px;
	width: 256px;
	color: white;
	display: flex;
	justify-content: center;
	align-items: center;
	border-radius: 100px;
	opacity: 0.85;
	text-transform: uppercase;
	font-size: 12px;
	cursor: pointer;
	margin: 8px;
`;
export const RightButton = styled(LeftButton)`
	background: white;
	color: black;
	opacity: 0.65;
`;

export const DownArrow = styled.img`
	height: 40px;
	animation: animateDown infinite 1.5s;
	overflow-x: hidden;
`;
export const Buttons = styled.div`
	text-align: center;
`;
// export const LeftButton = styled.div`

// `;
// export const LeftButton = styled.div`

// `;
// export const LeftButton = styled.div`

// `;
