import React from "react";
import { useForm } from "react-hook-form";
import {
	ButtonWrapper,
	LoginBoxTextWrapper,
	Container,
	Form,
	InputContainer,
	LoginBox,
	FormErrorMsg,
} from "./Register.styled";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useNavigate } from "react-router-dom";
import { gql, useMutation } from "@apollo/client";
import {
	CreateAccountMutation,
	CreateAccountMutationVariables,
} from "../../generated/graphql";
import { logUserIn } from "../Router/ProtectedRoute";
import { toast } from "react-toastify";
import { routes } from "../../config/routes";
import { Input } from "../../components/Input/Input";

const CREATE_ACCOUNT_MUTATION = gql`
	mutation CreateAccount(
		$username: String!
		$email: String!
		$password: String!
		$name: String
		$location: String
		$githubUsername: String
	) {
		createAccount(
			username: $username
			email: $email
			password: $password
			name: $name
			location: $location
			githubUsername: $githubUsername
		) {
			ok
			id
			error
		}
	}
`;

const registrationFormValidationSchema = z
	.object({
		email: z.string().email({ message: "Email is required" }),
		username: z.string().min(1, { message: "Username is required" }),
		password: z.string().min(1, { message: "Password is required" }),
		confirmPassword: z
			.string()
			.min(1, { message: "Confirm password is required" }),
		name: z.string().optional(),
		location: z.string().optional(),
		githubUsername: z.string().optional(),
	})
	.refine((data) => data.password === data.confirmPassword, {
		path: ["confirmPassword"],
		message: "Passwords do not match",
	});

type RegistrationFormValidationType = z.infer<
	typeof registrationFormValidationSchema
>;

export const Register: React.FC = () => {
	const navigate = useNavigate();

	const {
		register,
		handleSubmit,
		getValues,
		formState: { errors },
	} = useForm<RegistrationFormValidationType>({
		resolver: zodResolver(registrationFormValidationSchema),
		mode: "onBlur",
	});

	const [createAccount, { loading }] = useMutation<
		CreateAccountMutation,
		CreateAccountMutationVariables
	>(CREATE_ACCOUNT_MUTATION, {
		onCompleted: (data) => {
			const {
				createAccount: { ok, error },
			} = data;

			if (!ok && error) {
				return toast.error(error, {
					position: toast.POSITION.BOTTOM_LEFT,
					theme: "light",
				});
			}

			toast.success("Account created!", {
				position: toast.POSITION.BOTTOM_LEFT,
				theme: "light",
				autoClose: 3000,
			});

			const { email, password } = getValues();

			navigate(routes.login, { state: { email, password } });
		},
	});

	const onSubmit = (data: RegistrationFormValidationType) => {
		if (loading) return;

		createAccount({
			variables: {
				...data,
			},
		});
	};

	return (
		<Container>
			<LoginBox>
				<LoginBoxTextWrapper>
					<h2>Cafe To Go</h2>
					<p>Register</p>
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
							name: "username",
							type: "text",
							register: register("username", { required: true }),
							required: true,
							error: errors.username,
						}}
					/>
					<Input
						{...{
							name: "name",
							type: "text",
							register: register("name"),
						}}
					/>
					<Input
						{...{
							name: "githubUsername",
							type: "githubUsername",
							register: register("githubUsername"),
						}}
					/>
					<Input
						{...{
							name: "password",
							type: "password",
							register: register("password", { required: true }),
							required: true,
							error: errors.password,
						}}
					/>
					<Input
						{...{
							name: "confirmPassword",
							type: "password",
							register: register("confirmPassword", { required: true }),
							required: true,
							error: errors.confirmPassword,
						}}
					/>
				</Form>
				<LoginBoxTextWrapper></LoginBoxTextWrapper>
				<ButtonWrapper>
					<button onClick={() => navigate(routes.login)}>Log in</button>
					<button onClick={handleSubmit(onSubmit)}>Register</button>
				</ButtonWrapper>
			</LoginBox>
		</Container>
	);
};
