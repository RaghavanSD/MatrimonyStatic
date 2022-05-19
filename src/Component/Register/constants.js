export const formMetaData = [
	{
		id: "candidateName",
		type: "text",
		placeholder: "Enter Your  Candidate Name (Bride/BrideGroom)",
	},
	{ id: "candidateEmail", type: "text", placeholder: "Enter Your Email Id" },
	{
		id: "candidateConfirmEmail",
		type: "text",
		placeholder: "Enter Your Confirm Email Id",
	},
	{
		id: "candidateMobileNumber",
		type: "text",
		placeholder: "Enter Your Mobile Number",
	},
	{
		id: "candidateConfirmMobile",
		type: "text",
		placeholder: "Enter Your Confirm Mobile Number",
	},
	{
		id: "candidateGender",
		type: "select",
		placeholder: "Select Gender",
	},
	{ id: "candidatePassword", type: "password", placeholder: "Enter Password" },
	{
		id: "candidateConfirmPassword",
		type: "text",
		placeholder: "Enter Confirm Password",
	},
	{ id: "candidateFirstMarriage", type: "checkbox", name: "First Marriage" },
	{ id: "candidateCaste", type: "select", placeholder: "Select Caste" },
	{ id: "candidateGothra", type: "select", placeholder: "Select Gothra" },
	{
		id: "candidateHeight",
		type: "text",
		placeholder: "Enter the Height in feet",
	},
	{
		id: "candidateMotherTongue",
		type: "text",
		placeholder: "Enter the Mother tongue",
	},
	{
		id: "candidateDOB",
		type: "text",
		placeholder: "Enter the Date of Birth(DD/MM/YYYY)",
	},
];

export const options = [
	{ value: "Male", label: "Male" },
	{ value: "Female", label: "Female" },
];
export const casteOptions = [
	{ value: "Madhwa", label: "Madhwa" },
	{ value: "Smartha", label: "Smartha" },
	{ value: "Iyengar", label: "Iyengar" },
	{ value: "Iyer", label: "Iyer" },
];
export const gothraOptions = [
	{ value: "Koushika", label: "Koushika" },
	{ value: "Athreya", label: "Athreya" },
	{ value: "Vashista", label: "Vashista" },
	{ value: "Poothamanasa", label: "Poothamanasa" },
];

export const initialState = {
	candidateName: "",
	candidateEmail: "",
	candidateConfirmEmail: "",
	candidateMobileNumber: "",
	candidateConfirmMobile: "",
	candidateGender: "",
	candidatePassword: "",
	candidateConfirmPassword: "",
	candidateCaste: "",
	candidateFirstMarriage: "",
	candidateGothra: "",
	candidateHeight: "",
	candidateMotherTongue: "",
	candidateDOB: "",
};

export const RegexEmail=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/