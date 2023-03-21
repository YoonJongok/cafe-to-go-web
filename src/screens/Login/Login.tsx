import React from "react";
import { useForm } from "react-hook-form";
import {
	ButtonWrapper,
	LoginBoxTextWrapper,
	Container,
	Form,
	LoginBox,
	ForgotPasswordLink,
} from "./Login.styled";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useLocation, useNavigate } from "react-router-dom";
import { gql, useMutation } from "@apollo/client";
import { LoginMutation, LoginMutationVariables } from "../../generated/graphql";
import { logUserIn } from "../Router/ProtectedRoute";
import { toast } from "react-toastify";
import { routes } from "../../config/routes";
import { Input } from "../../components/Input/Input";

const LOGIN_MUTATION = gql`
	mutation Login($email: String!, $password: String!) {
		login(email: $email, password: $password) {
			ok
			error
			token
		}
	}
`;

const loginFormValidationSchema = z.object({
	email: z.string().email({ message: "Email is required" }),
	password: z.string().min(1, { message: "Password is required" }),
});

type LoginFormValidationType = z.infer<typeof loginFormValidationSchema>;

type LocationStateProps = {
	email?: string;
	password?: string;
};

export const Login: React.FC = () => {
	const navigate = useNavigate();
	const state = useLocation().state as LocationStateProps;

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<LoginFormValidationType>({
		resolver: zodResolver(loginFormValidationSchema),
		mode: "onBlur",
		defaultValues: {
			email: state?.email || "",
			password: state?.password || "",
		},
	});

	const [login, { loading }] = useMutation<
		LoginMutation,
		LoginMutationVariables
	>(LOGIN_MUTATION, {
		onCompleted: (data) => {
			const {
				login: { ok, error, token },
			} = data;
			if (!ok && error) {
				return toast.error(error, {
					position: toast.POSITION.BOTTOM_LEFT,
					theme: "light",
					autoClose: 3000,
				});
			}

			if (token) {
				logUserIn(token);
				navigate(routes.home);
			}
		},
	});

	const onSubmit = (data: LoginFormValidationType) => {
		if (loading) return;

		const { email, password } = data;

		login({
			variables: {
				email,
				password,
			},
		});
	};

	return (
		<Container>
			<LoginBox>
				<LoginBoxTextWrapper>
					<h2>Cafe To Go</h2>
					<p>Log in</p>
				</LoginBoxTextWrapper>
				<Form>
					<Input
						{...{
							name: "email",
							type: "email",
							register: register("email", { required: true }),
							required: true,
							error: errors.email,
						}}
					/>

					<Input
						{...{
							name: "password",
							type: "password",
							register: register("password", { required: true }),
							required: true,
							error: errors?.password,
						}}
					/>
				</Form>
				<LoginBoxTextWrapper>
					<ForgotPasswordLink to={routes.home}>
						Forgot password
					</ForgotPasswordLink>
				</LoginBoxTextWrapper>
				<ButtonWrapper>
					<button onClick={() => navigate(routes.register)}>Register</button>
					<button onClick={handleSubmit(onSubmit)}>Log in</button>
				</ButtonWrapper>
			</LoginBox>
		</Container>
	);
};
