import { gql, useQuery } from "@apollo/client";

const GET_USERS = gql`
	query getUsers {
		users {
			id
			name
			email
		}
	}
`;
export const Home = () => {
	const { loading, error, data } = useQuery(GET_USERS);

	// if (loading) return <p>Loading...</p>;
	// if (error) return <p>Error :(</p>;
	return <div>Home</div>;
};
