import { gql, useMutation, useQuery } from "@apollo/client";
import { toast } from "react-toastify";
import {
	CoffeeShop,
	GetAllCoffeeShopsQuery,
	GetAllCoffeeShopsQueryVariables,
} from "../../generated/graphql";
import PostCard from "../../components/PostCard";
import { useEffect, useState } from "react";
import { z } from "zod";
import { HomeContainer } from "./Home.styled";
import PageTitle from "../../components/PageTitle";

const GET_ALL_COFFEESHOPS_QUERY = gql`
	query GetAllCoffeeShops {
		getAllCoffeeShops {
			id
			name
			slug

			description
			user {
				id
				username
			}
			categories {
				slug
			}
			isMine

			createdAt
			updatedAt
		}
	}
`;

export const refineCoffeeShopData = (data?: GetAllCoffeeShopsType) => {
	if (!data?.getAllCoffeeShops || data.getAllCoffeeShops.length === 0) {
		return [];
	}

	const refinedData = data.getAllCoffeeShops.map((coffeeshop) => {
		const date = new Intl.DateTimeFormat().format(
			new Date(coffeeshop.createdAt)
		);
		return {
			...coffeeshop,
			createdAt: date.replace(/\s+/g, ""),
		};
	});

	return refinedData;
};

type GetAllCoffeeShopsType = {
	getAllCoffeeShops: CoffeeShop[];
};

export const Home = () => {
	const { data, loading, error } = useQuery<GetAllCoffeeShopsType>(
		GET_ALL_COFFEESHOPS_QUERY
	);

	const [coffeeShops, setCoffeeShops] = useState<CoffeeShop[]>(
		data?.getAllCoffeeShops ? refineCoffeeShopData(data) : []
	);

	useEffect(() => {
		if (!loading && data) {
			setCoffeeShops(refineCoffeeShopData(data));
		}
	}, [loading, data]);

	useEffect(() => {
		if (error) {
			toast.error(error.message, {
				position: toast.POSITION.BOTTOM_LEFT,
			});
		}
	}, [error]);

	return (
		<HomeContainer>
			<PageTitle title="Home" />
			{loading && <p>Loading...</p>}
			{coffeeShops &&
				coffeeShops.map((coffeeshop) => (
					<PostCard key={coffeeshop.id} coffeeshop={coffeeshop} />
				))}
		</HomeContainer>
	);
};
