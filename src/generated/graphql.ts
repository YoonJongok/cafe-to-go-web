/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  AccountNumber: any;
  BigInt: any;
  Byte: any;
  CountryCode: any;
  Cuid: any;
  Currency: any;
  DID: any;
  Date: any;
  DateTime: any;
  Duration: any;
  EmailAddress: any;
  GUID: any;
  HSL: any;
  HSLA: any;
  HexColorCode: any;
  Hexadecimal: any;
  IBAN: any;
  IP: any;
  IPv4: any;
  IPv6: any;
  ISBN: any;
  ISO8601Duration: any;
  JSON: any;
  JSONObject: any;
  JWT: any;
  Latitude: any;
  LocalDate: any;
  LocalEndTime: any;
  LocalTime: any;
  Locale: any;
  Long: any;
  Longitude: any;
  MAC: any;
  NegativeFloat: any;
  NegativeInt: any;
  NonEmptyString: any;
  NonNegativeFloat: any;
  NonNegativeInt: any;
  NonPositiveFloat: any;
  NonPositiveInt: any;
  ObjectID: any;
  PhoneNumber: any;
  Port: any;
  PositiveFloat: any;
  PositiveInt: any;
  PostalCode: any;
  RGB: any;
  RGBA: any;
  RoutingNumber: any;
  SafeInt: any;
  SemVer: any;
  Time: any;
  TimeZone: any;
  Timestamp: any;
  URL: any;
  USCurrency: any;
  UUID: any;
  UnsignedFloat: any;
  UnsignedInt: any;
  UtcOffset: any;
  Void: any;
};

export type Category = {
  __typename?: 'Category';
  createdAt: Scalars['String'];
  id: Scalars['Int'];
  name: Scalars['String'];
  shops?: Maybe<Array<Maybe<CoffeeShop>>>;
  slug: Scalars['String'];
  totalShops: Scalars['Int'];
  updatedAt: Scalars['String'];
};

export type CoffeeShop = {
  __typename?: 'CoffeeShop';
  address?: Maybe<Scalars['String']>;
  averageRating: Scalars['Float'];
  categories: Array<Category>;
  createdAt: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  id: Scalars['Int'];
  isLiked: Scalars['Boolean'];
  isMine: Scalars['Boolean'];
  latitude: Scalars['String'];
  likedBy?: Maybe<User>;
  likes: Scalars['Int'];
  longitude: Scalars['String'];
  name: Scalars['String'];
  photos?: Maybe<Array<Maybe<CoffeeShopPhoto>>>;
  slug: Scalars['String'];
  updatedAt: Scalars['String'];
  user: User;
};

export type CoffeeShopPhoto = {
  __typename?: 'CoffeeShopPhoto';
  createdAt: Scalars['String'];
  id: Scalars['Int'];
  shop: CoffeeShop;
  updatedAt: Scalars['String'];
  url: Scalars['String'];
};

export type CommonResponse = {
  __typename?: 'CommonResponse';
  error?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  ok: Scalars['Boolean'];
};

export type CreateCoffeeShopResult = {
  __typename?: 'CreateCoffeeShopResult';
  error?: Maybe<Scalars['String']>;
  ok: Scalars['Boolean'];
  shop?: Maybe<CoffeeShop>;
};

export type FollowResponse = {
  __typename?: 'FollowResponse';
  error?: Maybe<Scalars['String']>;
  /** Return boolean according to follow or unfollow */
  followed?: Maybe<Scalars['Boolean']>;
  message?: Maybe<Scalars['String']>;
  ok: Scalars['Boolean'];
};

export type Like = {
  __typename?: 'Like';
  createdAt: Scalars['String'];
  id: Scalars['Int'];
  shop: CoffeeShop;
  updatedAt: Scalars['String'];
};

export type LoginResponse = {
  __typename?: 'LoginResponse';
  error?: Maybe<Scalars['String']>;
  ok: Scalars['Boolean'];
  token?: Maybe<Scalars['String']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  createAccount: CommonResponse;
  createCoffeeShop: CreateCoffeeShopResult;
  editCoffeeShop: CommonResponse;
  editProfile: CommonResponse;
  login: LoginResponse;
  toggleFollow: FollowResponse;
};


export type MutationCreateAccountArgs = {
  email: Scalars['String'];
  githubUsername?: InputMaybe<Scalars['String']>;
  location?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  password: Scalars['String'];
  username: Scalars['String'];
};


export type MutationCreateCoffeeShopArgs = {
  address?: InputMaybe<Scalars['String']>;
  categories?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  description?: InputMaybe<Scalars['String']>;
  latitude?: InputMaybe<Scalars['String']>;
  longitude?: InputMaybe<Scalars['String']>;
  name: Scalars['String'];
};


export type MutationEditCoffeeShopArgs = {
  address?: InputMaybe<Scalars['String']>;
  categories?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  id: Scalars['Int'];
  lat?: InputMaybe<Scalars['Float']>;
  lng?: InputMaybe<Scalars['Float']>;
  name?: InputMaybe<Scalars['String']>;
};


export type MutationEditProfileArgs = {
  email?: InputMaybe<Scalars['String']>;
  githubUsername?: InputMaybe<Scalars['String']>;
  id: Scalars['Int'];
  location?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  password?: InputMaybe<Scalars['String']>;
  username?: InputMaybe<Scalars['String']>;
};


export type MutationLoginArgs = {
  email: Scalars['String'];
  password: Scalars['String'];
};


export type MutationToggleFollowArgs = {
  userId: Scalars['Int'];
};

export type ProfilesResult = {
  __typename?: 'ProfilesResult';
  results: Array<Maybe<User>>;
  total: Scalars['Int'];
};

export type Query = {
  __typename?: 'Query';
  getAllCoffeeShops?: Maybe<Array<Maybe<CoffeeShop>>>;
  getCoffeeShopById?: Maybe<CoffeeShop>;
  me?: Maybe<User>;
  searchShopsByTerm?: Maybe<Array<Maybe<CoffeeShop>>>;
  searchShopsByUserId?: Maybe<Array<Maybe<CoffeeShop>>>;
  seeProfiles: ProfilesResult;
  seeUser?: Maybe<User>;
};


export type QueryGetCoffeeShopByIdArgs = {
  id: Scalars['Int'];
};


export type QuerySearchShopsByTermArgs = {
  term: Scalars['String'];
};


export type QuerySearchShopsByUserIdArgs = {
  id: Scalars['Int'];
};


export type QuerySeeProfilesArgs = {
  lastId?: InputMaybe<Scalars['Int']>;
  term: Scalars['String'];
};


export type QuerySeeUserArgs = {
  id: Scalars['Int'];
};

export type ShopsResult = {
  __typename?: 'ShopsResult';
  results?: Maybe<Array<Maybe<CoffeeShop>>>;
  totalPages: Scalars['Int'];
};

export type User = {
  __typename?: 'User';
  avatarURL?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  email: Scalars['String'];
  /** Followers based on offset pagination. */
  followers?: Maybe<Array<Maybe<User>>>;
  /** Followings based on offset pagination. */
  followings?: Maybe<Array<Maybe<User>>>;
  githubUsername?: Maybe<Scalars['String']>;
  id: Scalars['Int'];
  /** Are you following me? */
  isFollowed?: Maybe<Scalars['Boolean']>;
  /** Am I following you? */
  isFollowing?: Maybe<Scalars['Boolean']>;
  /** Are you logged in user? */
  isMe?: Maybe<Scalars['Boolean']>;
  location?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  /** Total number of user followed */
  totalFollowers?: Maybe<Scalars['Int']>;
  /** Total number of user following */
  totalFollowings?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  username: Scalars['String'];
};


export type UserFollowersArgs = {
  page?: InputMaybe<Scalars['Int']>;
};


export type UserFollowingsArgs = {
  page?: InputMaybe<Scalars['Int']>;
};

export type LoginMutationVariables = Exact<{
  email: Scalars['String'];
  password: Scalars['String'];
}>;


export type LoginMutation = { __typename?: 'Mutation', login: { __typename?: 'LoginResponse', ok: boolean, error?: string | null, token?: string | null } };

export type CreateAccountMutationVariables = Exact<{
  username: Scalars['String'];
  email: Scalars['String'];
  password: Scalars['String'];
  name?: InputMaybe<Scalars['String']>;
  location?: InputMaybe<Scalars['String']>;
  githubUsername?: InputMaybe<Scalars['String']>;
}>;


export type CreateAccountMutation = { __typename?: 'Mutation', createAccount: { __typename?: 'CommonResponse', ok: boolean, id?: number | null, error?: string | null } };


export const LoginDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"Login"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"email"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"password"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"login"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"email"},"value":{"kind":"Variable","name":{"kind":"Name","value":"email"}}},{"kind":"Argument","name":{"kind":"Name","value":"password"},"value":{"kind":"Variable","name":{"kind":"Name","value":"password"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"ok"}},{"kind":"Field","name":{"kind":"Name","value":"error"}},{"kind":"Field","name":{"kind":"Name","value":"token"}}]}}]}}]} as unknown as DocumentNode<LoginMutation, LoginMutationVariables>;
export const CreateAccountDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateAccount"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"username"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"email"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"password"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"name"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"location"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"githubUsername"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createAccount"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"username"},"value":{"kind":"Variable","name":{"kind":"Name","value":"username"}}},{"kind":"Argument","name":{"kind":"Name","value":"email"},"value":{"kind":"Variable","name":{"kind":"Name","value":"email"}}},{"kind":"Argument","name":{"kind":"Name","value":"password"},"value":{"kind":"Variable","name":{"kind":"Name","value":"password"}}},{"kind":"Argument","name":{"kind":"Name","value":"name"},"value":{"kind":"Variable","name":{"kind":"Name","value":"name"}}},{"kind":"Argument","name":{"kind":"Name","value":"location"},"value":{"kind":"Variable","name":{"kind":"Name","value":"location"}}},{"kind":"Argument","name":{"kind":"Name","value":"githubUsername"},"value":{"kind":"Variable","name":{"kind":"Name","value":"githubUsername"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"ok"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"error"}}]}}]}}]} as unknown as DocumentNode<CreateAccountMutation, CreateAccountMutationVariables>;