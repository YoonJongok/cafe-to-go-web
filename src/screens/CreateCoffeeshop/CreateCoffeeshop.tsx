import { gql } from "@apollo/client";
import React from "react";

const CREATE_COFFEESHOP_MUTATION = gql`
	mutation CreateCoffeeShop(
		$name: String!
		$latitude: String
		$longitude: String
		$description: String
		$address: String
		$categories: [String]
	) {
		createCoffeeShop(
			name: $name
			latitude: $latitude
			longitude: $longitude
			description: $description
			address: $address
			categories: $categories
		) {
			ok
			error
			shop {
				id
				name
			}
		}
	}
`;

export const CreateCoffeeshop = () => {
	return <div>create</div>;
};
