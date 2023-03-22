import { gql } from "@apollo/client";
import React from "react";

const GET_COFFEESHOP_BY_ID_QUERY = gql`
	query GetCoffeeShopById($getCoffeeShopByIdId: Int!) {
		getCoffeeShopById(id: $getCoffeeShopByIdId) {
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
			}
			categories {
				name
				slug
				id
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

export const CoffeeshopDetail = () => {
	return <div>CoffeeshopDetail</div>;
};
