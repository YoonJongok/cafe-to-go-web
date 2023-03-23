import React from "react";
import { CoffeeShop } from "../../generated/graphql";
import {
	PostCardContainer,
	PostHeader,
	PostHeaderLeft,
	SettingContainer,
	PostBody,
	PostUtilitySection,
	Avatar,
} from "./PostCard.styled";
import { ReactComponent as OutlinedLikeIcon } from "../../assets/icons/outlined-like.svg";
import { ReactComponent as CommentIcon } from "../../assets/icons/comment.svg";
import { ReactComponent as VerticalSettingIcon } from "../../assets/icons/ellipsis-vertical.svg";

interface PostCardProps {
	coffeeshop: CoffeeShop;
}

export const PostCard: React.FC<PostCardProps> = ({ coffeeshop }) => {
	return (
		<PostCardContainer>
			<PostHeader>
				<PostHeaderLeft>
					<Avatar />
					<div>
						<h4>{coffeeshop.user.username}</h4>
						<p>{coffeeshop.createdAt}</p>
					</div>
				</PostHeaderLeft>
				<SettingContainer>
					<VerticalSettingIcon />
				</SettingContainer>
			</PostHeader>

			<PostBody>
				<img src={""} alt={""} />
				<div>
					<h3>{coffeeshop.name}</h3>

					<p>{coffeeshop.description}</p>
				</div>
			</PostBody>
			<PostUtilitySection>
				<div>
					<OutlinedLikeIcon />
					<p>Like</p>
				</div>
				<div>
					<p></p>
					<CommentIcon />
				</div>
			</PostUtilitySection>
		</PostCardContainer>
	);
};
