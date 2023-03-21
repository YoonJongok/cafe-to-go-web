import styled from "styled-components";

export const InputContainer = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: "flex-start";
	margin-bottom: 15px;
	label {
		&::first-letter {
			text-transform: capitalize;
		}
	}
	input {
		border-top-style: hidden;
		border-right-style: hidden;
		border-left-style: hidden;
		border-bottom-style: groove;
		border-radius: ${({ theme }) => theme.borderRadius};
		padding: 10px 4px;
		font-size: 1rem;
		&:focus {
			outline: none;
		}
	}
`;

export const FormErrorMsg = styled.span`
	margin-top: 8px;
	margin-left: 4px;
	color: red;
`;
