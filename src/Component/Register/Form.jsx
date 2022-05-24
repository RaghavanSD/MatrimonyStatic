import styled from "styled-components";
import React from "react";
import Select from "react-select";
import { Button } from "../Common/Navbar.style";
import { Link } from "react-router-dom";
import { assocPath } from "ramda";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
	formMetaData,
	options,
	gothraOptions,
	casteOptions,
	initialState,
	RegexEmail,
} from "./constants";

const customStyles = {
	control: (base) => ({
		...base,
		height: 45,
		minHeight: 45,
	}),
};

const Form = () => {
	const { useState, useRef } = React;
	const myRef = useRef(null);

	const executeScroll = () =>
		myRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
	const [formData, setFormData] = useState(initialState);
	const [emptyKey, setEmptyKey] = useState("");

	const onChangehandler = (target) => {
		if (target.id === "candidateFirstMarriage") {
			setFormData((state) =>
				assocPath([`${target.id}`], !formData?.candidateFirstMarriage, state),
			);
			return;
		}
		setFormData((state) => assocPath([`${target.id}`], target.value, state));
	};
	const onChangeSelect = (value, id) => {
		setFormData((state) => assocPath([`${id}`], value, state));
	};
	const isValidData = () => {
		setEmptyKey(
			Object.keys(formData).find(
				(key) => formData[key] === "" || formData[key] === null,
			),
		);
		executeScroll();
		let inCorrect = "";
		if (emptyKey) {
			toast.error(`${emptyKey} is mandatory field`, {
				position: "top-center",
				autoClose: 5000,
				hideProgressBar: false,
				closeOnClick: true,
				pauseOnHover: true,
				draggable: true,
				progress: undefined,
			});
			return emptyKey;
		}

		if (
			formData.candidateEmail &&
			(!formData.candidateEmail.match(RegexEmail) ||
				!formData.candidateConfirmEmail.match(RegexEmail))
		) {
			inCorrect = "email";
		}
		if (
			formData.candidateMobileNumber &&
			formData.candidateMobileNumber !== formData.candidateConfirmMobile.match
		) {
			inCorrect = "mobile";
		}

		toast.error(
			inCorrect === "email"
				? `Please enter valid ${inCorrect} id`
				: `Please enter valid ${inCorrect} number`,
			{
				position: "top-center",
				autoClose: 5000,
				hideProgressBar: false,
				closeOnClick: true,
				pauseOnHover: true,
				draggable: true,
				progress: undefined,
			},
		);
	};
	const onSubmit = (e) => {
		e.preventDefault();
		isValidData(formData);
		console.log("formData", formData);
		e.stopPropagation();
	};

	const fetchOptions = (type) => {
		switch (type) {
			case "candidateCaste":
				return casteOptions;
			case "candidateGothra":
				return gothraOptions;
			default:
				return options;
		}
	};
	const renderForm = (formMetaData) =>
		// eslint-disable-next-line array-callback-return
		formMetaData.map((m, i) => {
			switch (m.type) {
				case "checkbox":
					return (
						<CheckBoxWrapper key={i}>
							<CheckBoxInput
								type={m.type}
								id={m.id}
								name={m.name}
								onChange={(e) => onChangehandler(e.target)}
								checked={formData[m.id]}
							/>
							<label htmlFor="firstMarriage"> {m.name}</label>
						</CheckBoxWrapper>
					);

				case "select":
					return (
						<SelectWrapper key={i}>
							<Select
								id={m.id}
								options={fetchOptions(m.id)}
								value={fetchOptions(m.id).filter(
									(option) => option.label === formData[m.id],
								)}
								placeholder={m.placeholder}
								styles={customStyles}
								onChange={(value) => onChangeSelect(value?.value, m.id)}
							/>
						</SelectWrapper>
					);

				case "password":
					return (
						<InputWrapper key={i}>
							<Input
								id={m.id}
								type={m.type}
								placeholder={m.placeholder}
								onChange={(e) => onChangehandler(e.target)}
								value={formData[m.id]}
							/>
						</InputWrapper>
					);

				default:
					return (
						<InputWrapper ref={m.id === emptyKey ? myRef : null} key={i}>
							<Input
								id={m.id}
								placeholder={m.placeholder}
								onChange={(e) => onChangehandler(e.target)}
								value={formData[m.id]}
								error={m.id === emptyKey}
							/>
						</InputWrapper>
					);
			}
		});

	return (
		<StyleForm onSubmit={onSubmit}>
			{renderForm(formMetaData)}
			<ToastContainer
				position="top-center"
				autoClose={5000}
				hideProgressBar={false}
				newestOnTop={false}
				closeOnClick
				rtl={false}
				pauseOnFocusLoss
				draggable
				pauseOnHover
			/>
			<ButtonWrapper>
				<Button primary>Submit </Button>
				<Link to="/">
					<Button secondary>GoBack </Button>
				</Link>
			</ButtonWrapper>
		</StyleForm>
	);
};
export default Form;

const CheckBoxWrapper = styled.div`
	display: flex;
	align-items: center;
	width: 25%;

	padding-left: 12.2%;
`;
const ButtonWrapper = styled.div`
	display: flex;
	align-items: center;
	width: 25%;
	padding-left: 12.2%;
	> a {
		margin-left: 8px;
	}
`;

const StyleForm = styled.form`
	display: flex;
	flex-direction: column;
	align-self: center;
	padding-top: 32px;
	overflow-y: scroll;

	::-webkit-scrollbar {
		display: none;
	}
`;
const InputWrapper = styled.div`
	margin-bottom: 16px;
	width: 100%;
	display: flex;
	justify-content: ${(props) => (props.start ? "start" : "center")};
	align-items: center;
`;
const SelectWrapper = styled.div`
	width: 35%;
	padding-left: 12.2%;
	margin-bottom: 16px;
`;

const Input = styled.input`
	height: 40px;
	text-indent: 6px;
	/* border: 1px solid #ccc; */
	cursor: auto;
	border-radius: 5px;
	width: 75%;
	border: ${({ error }) => (error ? "1px solid red" : "1px solid #ccc")};
	&:focus {
		border: 1px solid #2684ff;
	}
	:focus-visible {
		outline: #2684ff;
	}
	::placeholder {
		font-weight: 400;
		font-family: apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto",
			"Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans",
			"Helvetica Neue", sans-serify;
	}
`;

const CheckBoxInput = styled(Input)`
	width: 8%;
	cursor: pointer;
`;
