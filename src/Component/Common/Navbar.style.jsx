import { Link } from "react-router-dom";
import styled from "styled-components";

export const NavBarWrapper = styled.header`
	position: absolute;
	height: 80px;
	background-color: rgba(229, 25, 95, 0.9);

	font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial,
		sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
	text-align: center;
	width: 100%;
	z-index: 1;

	@media all and (max-width: 460px) {
		display: flex;
		flex-direction: column;
		height: 180px;
	}
`;

export const Logo = styled.div`
	position: absolute;
	top: 20px;
	left: 30px;

	@media all and (max-width: 590px) {
		display: none;
	}
`;

export const ResourceLinks = styled.div`
	font-weight: 300;
	/* position: absolute;
	top: 18px;
	right: 30px; */
	letter-spacing: 1px;
`;

export const Post = styled.div`
	position: absolute;
	top: 18px;
	left: 180px;
	letter-spacing: 1px;

	@media all and (max-width: 740px) {
		display: none;
	}
`;

export const Button = styled.button`
	font-weight: 700;
	padding: 10px 20px;
	border-radius: 5px;
	font-size: 18px;
	text-align: center;
	color: white;
	&:hover {
		cursor: pointer;
		filter: brightness(1.3);
	}
	background: ${(props) =>
		props.primary ? "#004a3a" : props.secondary ? "#e65100" : "transparent"};
	border: ${(props) =>
		props.primary
			? "1px solid #004a3a"
			: props.secondary
			? "1px solid #e65100"
			: props.error
			? "red"
			: "1px solid white"};

	@media all and (max-width: 460px) {
		font-size: 14px;
		flex-direction: column;
		width: 100%;
		margin-bottom: 10px;
		margin-top: 10px;
		content-align: center;
	}
`;

export const A = styled(Link)`
	text-decoration: none;
	margin-left: 20px;
	margin-right: 20px;
	font-size: 18px;
	font-weight: bold;
	color: darkgrey;
	filter: ${(props) => props.active && "brightness(2)"};
	&:hover {
		cursor: pointer;
		filter: brightness(2);
	}

	@media all and (max-width: 460px) {
		flex-direction: column;
		font-size: 14px;
	}
`;
