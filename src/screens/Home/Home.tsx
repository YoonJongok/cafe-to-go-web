import { gql, useMutation } from "@apollo/client";
import { LoginMutation, LoginMutationVariables } from "../../generated/graphql";

const LOGIN_MUTATION = gql`
	mutation Login($email: String!, $password: String!) {
		login(email: $email, password: $password) {
			ok
			error
			token
		}
	}
`;

export const Home = () => {
	const [loginMutaion] = useMutation<LoginMutation, LoginMutationVariables>(
		LOGIN_MUTATION,
		{}
	);

	// if (loading) return <p>Loading...</p>;
	// if (error) return <p>Error :(</p>;
	return <div>Home</div>;
};
