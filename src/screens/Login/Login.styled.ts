import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.div`
	width: 100%;
	height: 100%;
	min-height: 100vh;
	padding-top: 140px;
`;

export const LoginBox = styled.div`
	position: relative;
	display: flex;
	flex-direction: column;
	align-items: center;
	max-width: 460px;
	width: 100%;
	gap: 30px;
	background: ${({ theme }) => theme.boxBgColor};
	box-shadow: ${({ theme }) => theme.boxShadow};
	padding: 40px 20px;
	margin-inline: auto;
`;

export const LoginBoxTextWrapper = styled.div`
	display: block;
	text-align: center;

	h2 {
		font-size: 2rem;
		margin-bottom: 10px;
	}
	p {
		font-size: 1.2rem;
	}
`;

export const ButtonWrapper = styled.div`
	width: 100%;
	height: 40px;
	display: flex;

	button {
		border: none;
		background: #e9eaec;
		width: 100%;
		color: dark-grey;
		&:last-child {
			background: #293854;
			color: white;
		}

		&:hover {
			opacity: 0.8;
		}
	}
`;

export const ForgotPasswordLink = styled(Link)`
	font-size: 1.2rem;
	text-decoration: none;
	&:visited {
		color: grey;
	}
	&:hover {
		color: darkgrey;
	}
`;

export const FormErrorMsg = styled.span`
	margin-top: 8px;
	margin-left: 4px;
	color: red;
`;
