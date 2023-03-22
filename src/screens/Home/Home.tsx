import { gql, useMutation } from "@apollo/client";

const GET_ALL_COFFEESHOPS_QUERY = gql`
	query GetAllCoffeeShops {
		getAllCoffeeShops {
			id
			name
			slug
			latitude
			longitude
			address
			description

			user {
				id
				username
				email
				name
				avatarURL
				location
				githubUsername
				followers {
					totalFollowers
				}
				followings {
					totalFollowings
				}
				isMe
				totalFollowers
				totalFollowings
				isFollowing
				isFollowed
				createdAt
				updatedAt
			}
			categories {
				slug
			}
			likes
			isMine
			isLiked
			likedBy {
				id
				username
			}
			averageRating
			createdAt
			updatedAt
		}
	}
`;

export const Home = () => {
	return <div>Home</div>;
};
