import React from "react";
import { NavBarWrapper } from "./Navbar.style";
import { ResourceLinks } from "./Navbar.style";
// import { Post } from "./Navbar.style";
// import { Button } from "./Navbar.style";
import { A } from "./Navbar.style";

function NavBar(props) {
	const { active } = props;
	return (
		<>
			{/* <div>NavBar</div> */}
			<NavBarWrapper>
				<div style={{ display: "flex", alignItems: "center", height: "100%" }}>
					{["Profile", "NewMatches", "Search"].map((m, i) => (
						<ResourceLinks key={i}>
							<A
								active={active === m.toLocaleLowerCase()}
								to={`/${m.toLocaleLowerCase()}`}>
								{m}
							</A>
						</ResourceLinks>
					))}
				</div>
			</NavBarWrapper>
		</>
	);
}

export default NavBar;
