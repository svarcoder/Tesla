import React, { useState } from "react";
import {
	BurgerNav,
	Container,
	CustomClose,
	Menu,
	MobileNav,
	RightMenu,
} from "./style";
import LogoI from "../../../../asset/images/logo.svg";
import CustomCloseI from "../../../../asset/images/customClose.svg";
import { useSelector } from "react-redux";
import { selectCars } from "../../../../logic/reducer/counterSlice";

const Header = (props: any) => {
	const [burgerStatus, setBurgerStatus] = useState(false);

	const cars = useSelector(selectCars);
	return (
		<Container>
			<a href=''>
				<img src={LogoI} alt='' />
			</a>
			<Menu>
				{cars &&
					cars.map((item: any, i: number) => (
						<p key={i}>
							<a href=''> {item}</a>
						</p>
					))}
			</Menu>
			<RightMenu>
				<a href=''>Shop</a>
				<a href=''>Account</a>
				<a href='#' onClick={() => setBurgerStatus(true)}>
					Menu
				</a>
			</RightMenu>
			<MobileNav>
				<BurgerNav show={burgerStatus}>
					<CustomClose onClick={() => setBurgerStatus(false)}>
						<img src={CustomCloseI} alt='' />
					</CustomClose>
					<li>
						<a href=''>Existing Inventory</a>
					</li>
					<li>
						<a href=''>Used Inventory h</a>
					</li>
					<li>
						<a href=''>Trade-In</a>
					</li>
					<li>
						<a href=''>Test Drive</a>
					</li>
					<li>
						<a href=''>Cybertruck</a>
					</li>
					<li>
						<a href=''>Roadster</a>
					</li>
					<li>
						<a href=''>Semi</a>
					</li>
					<li>
						<a href=''>Charging</a>
					</li>
					<li>
						<a href=''>Powerwall</a>
					</li>
					<li>
						<a href=''>Commercial Energy</a>
					</li>
					<li>
						<a href=''>Utilities</a>
					</li>
					<li>
						<a href=''>Find Us</a>
					</li>
					<li>
						<a href=''>Support</a>
					</li>
					<li>
						<a href=''>Investor Relations</a>
					</li>
				</BurgerNav>
			</MobileNav>
		</Container>
	);
};

export default Header;
