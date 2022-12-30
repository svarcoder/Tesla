import styled from "styled-components";
interface Props {
	show: any;
}

export const Container = styled.div`
	min-height: 60px;
	position: fixed;
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 0 20px;
	top: 0;
	left: 0;
	right: 0;
	z-index: 1;
`;

export const Menu = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	flex: 1;
	a {
		font-weight: 600;

		padding: 0 10px;
		flex-wrap: nowrap;
	}
	@media (max-width: 768px) {
		display: none;
	}
`;

export const RightMenu = styled.div`
	a {
		font-weight: 600;
		margin-right: 10px;
	}
`;
export const MobileNav = styled.div`
	overflow: hidden;
`;

export const BurgerNav = styled.div<Props>`
	position: fixed;
	top: 0;
	bottom: 0;
	right: 0;
	background: white;
	width: 300px;
	z-index: 16;
	list-style: none;
	padding: 20px;
	display: flex;
	flex-direction: column;
	text-align: start;
	transform: ${(props) => (props.show ? "translateX(0)" : "translateX(100%)")};
	transition: transform 0.2s ease-in;
	height: 100%;
	margin-right: -50px; /* Maximum width of scrollbar */
	padding-right: 50px;
	overflow-y: scroll;
	scrollbar-width: none;
	li {
		padding: 15px 0;
		border-bottom: 1px solid rgba(0, 0, 0, 0.2);
		a {
			font-weight: 600;
		}
	}
`;
export const CustomClose = styled.div`
	display: flex;
	justify-content: flex-end;
	cursor: pointer;
	img {
		height: 50px;
		width: 50px;
	}
`;
