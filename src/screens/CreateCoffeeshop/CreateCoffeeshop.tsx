import { gql, useMutation } from "@apollo/client";
import React from "react";
import { CreateCoffeeshopContainer } from "./CreateCoffeeshops.styled";
import { Input } from "../../components/Input/Input";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import {
	CreateCoffeeShopMutation,
	CreateCoffeeShopMutationVariables,
} from "../../generated/graphql";
import Form from "../../components/Form";
import { toast } from "react-toastify";
import { routes } from "../../config/routes";
import { useNavigate } from "react-router-dom";

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
			}
		}
	}
`;
const createCoffeeshopFormValidationSchema = z.object({
	name: z.string().min(1, { message: "Cafe name is required" }),
	latitude: z.string().optional(),
	longitude: z.string().optional(),
	description: z.string().optional(),
	address: z.string().optional(),
	categories: z.string().optional(),
});

type CreateCoffeeshopFormValidationType = z.infer<
	typeof createCoffeeshopFormValidationSchema
>;

export const CreateCoffeeshop = () => {
	const navigate = useNavigate();

	const [createCoffeeshop, { loading }] = useMutation<
		CreateCoffeeShopMutation,
		CreateCoffeeShopMutationVariables
	>(CREATE_COFFEESHOP_MUTATION, {
		onCompleted: (data) => {
			const {
				createCoffeeShop: { ok, error, shop },
			} = data;

			if (!ok && error) {
				return toast.error(error, {
					position: toast.POSITION.BOTTOM_LEFT,
					theme: "light",
				});
			}

			toast.success("Coffeeshop created!", {
				position: toast.POSITION.BOTTOM_LEFT,
				theme: "light",
				autoClose: 3000,
			});

			navigate(`/shop/${shop?.id}}`);
		},
	});

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<CreateCoffeeshopFormValidationType>({
		resolver: zodResolver(createCoffeeshopFormValidationSchema),
		mode: "onBlur",
	});

	const onSubmit = (data: CreateCoffeeshopFormValidationType) => {
		if (loading) return;
		const { categories } = data;
		console.log({ data });
		const categoriesArray = categories?.split(",");
		createCoffeeshop({
			variables: {
				...data,
				categories: categoriesArray,
			},
		});
	};

	return (
		<CreateCoffeeshopContainer>
			<Form>
				<Input
					{...{
						name: "Cafe name",
						type: "text",
						register: register("name", { required: true }),
						required: true,
						error: errors.name,
					}}
				/>
				<Input
					{...{
						name: "description",
						type: "text",
						register: register("description"),
						error: errors?.description,
					}}
				/>

				<Input
					{...{
						name: "latitude",
						type: "text",
						register: register("latitude"),
						error: errors?.latitude,
					}}
				/>
				<Input
					{...{
						name: "longitude",
						type: "text",
						register: register("longitude", { required: true }),
						required: true,
						error: errors?.longitude,
					}}
				/>
				<Input
					{...{
						name: "address",
						type: "text",
						register: register("address", { required: true }),
						required: true,
						error: errors?.address,
					}}
				/>

				<Input
					{...{
						name: "categories",
						type: "text",
						register: register("categories"),
						error: errors?.categories,
					}}
				/>
				<button onClick={handleSubmit(onSubmit)}>Register</button>
			</Form>
		</CreateCoffeeshopContainer>
	);
};
