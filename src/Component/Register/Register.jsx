import React from "react";
import styled from "styled-components";
import Form from "./Form";
const Register = () => {
	return (
		<Container>
			<Heading>Candidate Registration Form</Heading>
			<Mandatory>* All below fields are mandatory</Mandatory>
			<Form />
		</Container>
	);
};

export default Register;

const Heading = styled.h1`
	margin: 0;
	padding-left: 16px;
	text-align: center;
`;

const Mandatory = styled.h4`
	margin: 0;
	padding-left: 16px;
	text-align: center;
	color:red
`;
export const Container = styled.div`
	&&& {
		font-size: 16px;
		background-color: #eee;
		height: 100%;
		padding-bottom: 32px;
	}
`;
