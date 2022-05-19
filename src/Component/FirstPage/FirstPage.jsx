import { Link } from "react-router-dom";
import styled from "styled-components";
import {
	CardWrapper,
	CardHeader,
	CardHeading,
	CardBody,
	CardIcon,
	CardFieldset,
	CardInput,
	CardOptionsItem,
	CardOptions,
	CardOptionsNote,
	CardButton,
	CardLink,
} from "../Common/Card";

const FirstPage = () => {
	return (
		<Container>
			<CenterDiv>
				<CardWrapper>
					<CardHeader>
						<CardHeading>Log in</CardHeading>
					</CardHeader>

					<CardBody>
						<CardFieldset>
							<CardInput placeholder="Username" type="text" required />
						</CardFieldset>

						<CardFieldset>
							<CardInput placeholder="Password" type="password" required />
							<CardIcon className="fa fa-eye" eye small />
						</CardFieldset>

						<CardFieldset>
							<CardOptionsNote>Or Log in with</CardOptionsNote>

							<CardOptions>
								<CardOptionsItem>
									<CardIcon className="fab fa-twitter" small>
										OTP
									</CardIcon>
								</CardOptionsItem>

								<CardOptionsItem>
									<CardIcon className="fab fa-twitter" big />
								</CardOptionsItem>

								<CardOptionsItem>
									<CardIcon className="fab fa-facebook" big />
								</CardOptionsItem>
							</CardOptions>
						</CardFieldset>

						<CardFieldset>
							<Link to={"/register"}>
								<CardButton type="button">Register</CardButton>
							</Link>
						</CardFieldset>
					</CardBody>
				</CardWrapper>
			</CenterDiv>
		</Container>
	);
};

export default FirstPage;

export const Container = styled.div`
	background-color: #eee;
	height: 100vh;
`;

const CenterDiv = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	height: inherit;
`;
