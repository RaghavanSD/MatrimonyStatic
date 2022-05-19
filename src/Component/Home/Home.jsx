import styled from "styled-components";
import {
	CardWrapper as BaseCardWrapper,
	CardHeader as BaseCardHeader,
	CardBody,
	CardFieldset,
} from "../Common/Card";
import NavBar from "../Common/NavBar";
const Home = () => {
	return (
		<Container>
			<NavBar />

			<Row>
				<LeftSection>
					<label>Filter</label>
				</LeftSection>
				<RestSection>
					{[...Array(8).fill(8)].map((m, i) => (
						<CardWrapper key={i}>
							<CardHeader>
								<img
									style={{ height: "150px", width: "150px" }}
									src="./logo512.png"
									alt=""
								/>
								<CardBody>
									<CardFieldset>
										asdfasdfasdfas asdfasdfasdfasasdf asdfasdfa
									</CardFieldset>
								</CardBody>
							</CardHeader>
						</CardWrapper>
					))}
				</RestSection>
			</Row>
		</Container>
	);
};

export default Home;
export const CardWrapper = styled(BaseCardWrapper)`
	width: 80%;
`;
export const Row = styled.div`
	display: flex;
	width: 100%;
	padding-top: 80px;
`;
export const CardHeader = styled(BaseCardHeader)`
	display: flex;
	justify-content: center;
	flex-direction: column;
	align-items: center;
`;
export const LeftSection = styled.div`
	flex-basis: 20%;
	padding: 4px 0;
	background: lightgrey;
`;
export const RestSection = styled.div`
	flex-basis: 80%;
	background: #ddd;
	max-height: 100%;
	overflow-y: scroll;
`;

export const Container = styled.div`
	&&& {
		font-size: 16px;
		background-color: #eee;
		height: 100vh;
		display: flex;
	}
`;
