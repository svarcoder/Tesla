import Header from "../header";
import Section from "../section";
import { Container } from "./style";
import ModelS from "../../../../asset/images/model-s.jpg";
import ModelY from "../../../../asset/images/model-y.jpg";
import Model3 from "../../../../asset/images/model-3.jpg";
import ModelX from "../../../../asset/images/model-x.jpg";
import SolarP from "../../../../asset/images/solar-panel.jpg";
import SolarR from "../../../../asset/images/solar-roof.jpg";
import Associa from "../../../../asset/images/accessories.jpg";

const Home = (props: any) => {
	return (
		<>
			<Header />
			<Container>
				<Section
					title='Model S'
					description='Order Online for Touchless Delivery'
					backgroundImge={ModelS}
					leftBtnText='CUSTOM ORDER'
					rightBtnText='EXISTING INVENTORY'
				/>
				<Section
					title='Model Y'
					description='Order Online for Touchless Delivery'
					backgroundImge={ModelY}
					leftBtnText='CUSTOM ORDER'
					rightBtnText='EXISTING INVENTORY'
				/>
				<Section
					title='Model 3'
					description='Order Online for Touchless Delivery'
					backgroundImge={Model3}
					leftBtnText='CUSTOM ORDER'
					rightBtnText='EXISTING INVENTORY'
				/>
				<Section
					title='Model X'
					description='Order Online for Touchless Delivery'
					backgroundImge={ModelX}
					leftBtnText='CUSTOM ORDER'
					rightBtnText='EXISTING INVENTORY'
				/>
				<Section
					title='Solar Panels'
					description='Lowest Cost Solar Panels in America'
					backgroundImge={SolarP}
					leftBtnText='ORDER NOW'
					rightBtnText='LEARN MORE'
				/>
				<Section
					title='Solar Roof'
					description='Produce Clean Energy From Your Roof'
					backgroundImge={SolarR}
					leftBtnText='ORDER NOW'
					rightBtnText='LEARN MORE'
				/>
				<Section
					title='Accessories'
					description=''
					backgroundImge={Associa}
					leftBtnText='SHOP NOW'
				/>
			</Container>
		</>
	);
};

export default Home;
