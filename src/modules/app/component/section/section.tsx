import {
	ButtonGroup,
	Buttons,
	DownArrow,
	ItemText,
	LeftButton,
	RightButton,
	Wrap,
} from "./style";
import DownArrowI from "../../../../asset/images/down-arrow.svg";
const Fade = require("react-reveal/Fade");

const Section = (props: any) => {
	return (
		<>
			<Wrap bgImage={props.backgroundImge}>
				<Fade bottom>
					<ItemText>
						<h1>{props.title}</h1>
						<p>{props.description}</p>
					</ItemText>
				</Fade>
				<Buttons>
					<Fade bottom>
						<ButtonGroup>
							<LeftButton>{props.leftBtnText}</LeftButton>
							{props.rightBtnText && (
								<RightButton>{props.rightBtnText}</RightButton>
							)}
						</ButtonGroup>
						<DownArrow src={DownArrowI} alt='' />
					</Fade>
				</Buttons>
			</Wrap>
		</>
	);
};

export default Section;
