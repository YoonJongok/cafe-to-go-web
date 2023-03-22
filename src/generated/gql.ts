/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
const documents = {
    "\n\tquery GetCoffeeShopById($getCoffeeShopByIdId: Int!) {\n\t\tgetCoffeeShopById(id: $getCoffeeShopByIdId) {\n\t\t\tid\n\t\t\tname\n\t\t\tslug\n\t\t\tlatitude\n\t\t\tlongitude\n\t\t\taddress\n\t\t\tdescription\n\n\t\t\tuser {\n\t\t\t\tid\n\t\t\t\tusername\n\t\t\t}\n\t\t\tcategories {\n\t\t\t\tname\n\t\t\t\tslug\n\t\t\t\tid\n\t\t\t}\n\t\t\tlikes\n\t\t\tisMine\n\t\t\tisLiked\n\t\t\tlikedBy {\n\t\t\t\tid\n\t\t\t\tusername\n\t\t\t}\n\t\t\taverageRating\n\t\t\tcreatedAt\n\t\t\tupdatedAt\n\t\t}\n\t}\n": types.GetCoffeeShopByIdDocument,
    "\n\tmutation CreateCoffeeShop(\n\t\t$name: String!\n\t\t$latitude: String\n\t\t$longitude: String\n\t\t$description: String\n\t\t$address: String\n\t\t$categories: [String]\n\t) {\n\t\tcreateCoffeeShop(\n\t\t\tname: $name\n\t\t\tlatitude: $latitude\n\t\t\tlongitude: $longitude\n\t\t\tdescription: $description\n\t\t\taddress: $address\n\t\t\tcategories: $categories\n\t\t) {\n\t\t\tok\n\t\t\terror\n\t\t\tshop {\n\t\t\t\tid\n\t\t\t\tname\n\t\t\t}\n\t\t}\n\t}\n": types.CreateCoffeeShopDocument,
    "\n\tquery GetAllCoffeeShops {\n\t\tgetAllCoffeeShops {\n\t\t\tid\n\t\t\tname\n\t\t\tslug\n\t\t\tlatitude\n\t\t\tlongitude\n\t\t\taddress\n\t\t\tdescription\n\n\t\t\tuser {\n\t\t\t\tid\n\t\t\t\tusername\n\t\t\t\temail\n\t\t\t\tname\n\t\t\t\tavatarURL\n\t\t\t\tlocation\n\t\t\t\tgithubUsername\n\t\t\t\tfollowers {\n\t\t\t\t\ttotalFollowers\n\t\t\t\t}\n\t\t\t\tfollowings {\n\t\t\t\t\ttotalFollowings\n\t\t\t\t}\n\t\t\t\tisMe\n\t\t\t\ttotalFollowers\n\t\t\t\ttotalFollowings\n\t\t\t\tisFollowing\n\t\t\t\tisFollowed\n\t\t\t\tcreatedAt\n\t\t\t\tupdatedAt\n\t\t\t}\n\t\t\tcategories {\n\t\t\t\tslug\n\t\t\t}\n\t\t\tlikes\n\t\t\tisMine\n\t\t\tisLiked\n\t\t\tlikedBy {\n\t\t\t\tid\n\t\t\t\tusername\n\t\t\t}\n\t\t\taverageRating\n\t\t\tcreatedAt\n\t\t\tupdatedAt\n\t\t}\n\t}\n": types.GetAllCoffeeShopsDocument,
    "\n\tmutation Login($email: String!, $password: String!) {\n\t\tlogin(email: $email, password: $password) {\n\t\t\tok\n\t\t\terror\n\t\t\ttoken\n\t\t}\n\t}\n": types.LoginDocument,
    "\n\tmutation CreateAccount(\n\t\t$username: String!\n\t\t$email: String!\n\t\t$password: String!\n\t\t$name: String\n\t\t$location: String\n\t\t$githubUsername: String\n\t) {\n\t\tcreateAccount(\n\t\t\tusername: $username\n\t\t\temail: $email\n\t\t\tpassword: $password\n\t\t\tname: $name\n\t\t\tlocation: $location\n\t\t\tgithubUsername: $githubUsername\n\t\t) {\n\t\t\tok\n\t\t\tid\n\t\t\terror\n\t\t}\n\t}\n": types.CreateAccountDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = graphql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function graphql(source: string): unknown;

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n\tquery GetCoffeeShopById($getCoffeeShopByIdId: Int!) {\n\t\tgetCoffeeShopById(id: $getCoffeeShopByIdId) {\n\t\t\tid\n\t\t\tname\n\t\t\tslug\n\t\t\tlatitude\n\t\t\tlongitude\n\t\t\taddress\n\t\t\tdescription\n\n\t\t\tuser {\n\t\t\t\tid\n\t\t\t\tusername\n\t\t\t}\n\t\t\tcategories {\n\t\t\t\tname\n\t\t\t\tslug\n\t\t\t\tid\n\t\t\t}\n\t\t\tlikes\n\t\t\tisMine\n\t\t\tisLiked\n\t\t\tlikedBy {\n\t\t\t\tid\n\t\t\t\tusername\n\t\t\t}\n\t\t\taverageRating\n\t\t\tcreatedAt\n\t\t\tupdatedAt\n\t\t}\n\t}\n"): (typeof documents)["\n\tquery GetCoffeeShopById($getCoffeeShopByIdId: Int!) {\n\t\tgetCoffeeShopById(id: $getCoffeeShopByIdId) {\n\t\t\tid\n\t\t\tname\n\t\t\tslug\n\t\t\tlatitude\n\t\t\tlongitude\n\t\t\taddress\n\t\t\tdescription\n\n\t\t\tuser {\n\t\t\t\tid\n\t\t\t\tusername\n\t\t\t}\n\t\t\tcategories {\n\t\t\t\tname\n\t\t\t\tslug\n\t\t\t\tid\n\t\t\t}\n\t\t\tlikes\n\t\t\tisMine\n\t\t\tisLiked\n\t\t\tlikedBy {\n\t\t\t\tid\n\t\t\t\tusername\n\t\t\t}\n\t\t\taverageRating\n\t\t\tcreatedAt\n\t\t\tupdatedAt\n\t\t}\n\t}\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n\tmutation CreateCoffeeShop(\n\t\t$name: String!\n\t\t$latitude: String\n\t\t$longitude: String\n\t\t$description: String\n\t\t$address: String\n\t\t$categories: [String]\n\t) {\n\t\tcreateCoffeeShop(\n\t\t\tname: $name\n\t\t\tlatitude: $latitude\n\t\t\tlongitude: $longitude\n\t\t\tdescription: $description\n\t\t\taddress: $address\n\t\t\tcategories: $categories\n\t\t) {\n\t\t\tok\n\t\t\terror\n\t\t\tshop {\n\t\t\t\tid\n\t\t\t\tname\n\t\t\t}\n\t\t}\n\t}\n"): (typeof documents)["\n\tmutation CreateCoffeeShop(\n\t\t$name: String!\n\t\t$latitude: String\n\t\t$longitude: String\n\t\t$description: String\n\t\t$address: String\n\t\t$categories: [String]\n\t) {\n\t\tcreateCoffeeShop(\n\t\t\tname: $name\n\t\t\tlatitude: $latitude\n\t\t\tlongitude: $longitude\n\t\t\tdescription: $description\n\t\t\taddress: $address\n\t\t\tcategories: $categories\n\t\t) {\n\t\t\tok\n\t\t\terror\n\t\t\tshop {\n\t\t\t\tid\n\t\t\t\tname\n\t\t\t}\n\t\t}\n\t}\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n\tquery GetAllCoffeeShops {\n\t\tgetAllCoffeeShops {\n\t\t\tid\n\t\t\tname\n\t\t\tslug\n\t\t\tlatitude\n\t\t\tlongitude\n\t\t\taddress\n\t\t\tdescription\n\n\t\t\tuser {\n\t\t\t\tid\n\t\t\t\tusername\n\t\t\t\temail\n\t\t\t\tname\n\t\t\t\tavatarURL\n\t\t\t\tlocation\n\t\t\t\tgithubUsername\n\t\t\t\tfollowers {\n\t\t\t\t\ttotalFollowers\n\t\t\t\t}\n\t\t\t\tfollowings {\n\t\t\t\t\ttotalFollowings\n\t\t\t\t}\n\t\t\t\tisMe\n\t\t\t\ttotalFollowers\n\t\t\t\ttotalFollowings\n\t\t\t\tisFollowing\n\t\t\t\tisFollowed\n\t\t\t\tcreatedAt\n\t\t\t\tupdatedAt\n\t\t\t}\n\t\t\tcategories {\n\t\t\t\tslug\n\t\t\t}\n\t\t\tlikes\n\t\t\tisMine\n\t\t\tisLiked\n\t\t\tlikedBy {\n\t\t\t\tid\n\t\t\t\tusername\n\t\t\t}\n\t\t\taverageRating\n\t\t\tcreatedAt\n\t\t\tupdatedAt\n\t\t}\n\t}\n"): (typeof documents)["\n\tquery GetAllCoffeeShops {\n\t\tgetAllCoffeeShops {\n\t\t\tid\n\t\t\tname\n\t\t\tslug\n\t\t\tlatitude\n\t\t\tlongitude\n\t\t\taddress\n\t\t\tdescription\n\n\t\t\tuser {\n\t\t\t\tid\n\t\t\t\tusername\n\t\t\t\temail\n\t\t\t\tname\n\t\t\t\tavatarURL\n\t\t\t\tlocation\n\t\t\t\tgithubUsername\n\t\t\t\tfollowers {\n\t\t\t\t\ttotalFollowers\n\t\t\t\t}\n\t\t\t\tfollowings {\n\t\t\t\t\ttotalFollowings\n\t\t\t\t}\n\t\t\t\tisMe\n\t\t\t\ttotalFollowers\n\t\t\t\ttotalFollowings\n\t\t\t\tisFollowing\n\t\t\t\tisFollowed\n\t\t\t\tcreatedAt\n\t\t\t\tupdatedAt\n\t\t\t}\n\t\t\tcategories {\n\t\t\t\tslug\n\t\t\t}\n\t\t\tlikes\n\t\t\tisMine\n\t\t\tisLiked\n\t\t\tlikedBy {\n\t\t\t\tid\n\t\t\t\tusername\n\t\t\t}\n\t\t\taverageRating\n\t\t\tcreatedAt\n\t\t\tupdatedAt\n\t\t}\n\t}\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n\tmutation Login($email: String!, $password: String!) {\n\t\tlogin(email: $email, password: $password) {\n\t\t\tok\n\t\t\terror\n\t\t\ttoken\n\t\t}\n\t}\n"): (typeof documents)["\n\tmutation Login($email: String!, $password: String!) {\n\t\tlogin(email: $email, password: $password) {\n\t\t\tok\n\t\t\terror\n\t\t\ttoken\n\t\t}\n\t}\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n\tmutation CreateAccount(\n\t\t$username: String!\n\t\t$email: String!\n\t\t$password: String!\n\t\t$name: String\n\t\t$location: String\n\t\t$githubUsername: String\n\t) {\n\t\tcreateAccount(\n\t\t\tusername: $username\n\t\t\temail: $email\n\t\t\tpassword: $password\n\t\t\tname: $name\n\t\t\tlocation: $location\n\t\t\tgithubUsername: $githubUsername\n\t\t) {\n\t\t\tok\n\t\t\tid\n\t\t\terror\n\t\t}\n\t}\n"): (typeof documents)["\n\tmutation CreateAccount(\n\t\t$username: String!\n\t\t$email: String!\n\t\t$password: String!\n\t\t$name: String\n\t\t$location: String\n\t\t$githubUsername: String\n\t) {\n\t\tcreateAccount(\n\t\t\tusername: $username\n\t\t\temail: $email\n\t\t\tpassword: $password\n\t\t\tname: $name\n\t\t\tlocation: $location\n\t\t\tgithubUsername: $githubUsername\n\t\t) {\n\t\t\tok\n\t\t\tid\n\t\t\terror\n\t\t}\n\t}\n"];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;