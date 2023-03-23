import styled from "styled-components";

export const PostCardContainer = styled.div`
	max-width: 600px;
	width: 100%;
	background-color: #fff;
	border-radius: 10px;
	box-shadow: ${({ theme }) => theme.boxShadow};
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	padding-bottom: 10px;
`;

export const PostHeader = styled.div`
	width: 100%;
	display: flex;
	justify-content: space-between;
	align-items: center;
	pading-inline: 10px;
`;

export const PostHeaderLeft = styled.div`
	display: flex;
	align-items: center;
	padding: 10px;
	div {
		&:last-child {
			margin-left: 10px;
		}
	}
`;

export const Avatar = styled.div`
	width: 50px;
	height: 50px;
	border-radius: 50%;
	background: #06102f;
`;
export const PostBody = styled.div`
	width: 100%;
	img {
		width: 100%;
		height: 335px;
	}
	div {
		display: flex;
		flex-direction: column;
		gap: 10px;
		padding: 10px;
		h3 {
			font-size: 1.3rem;
			font-weight: bold;
			text-transform: capitalize;
		}
	}
`;

export const SettingContainer = styled.div`
	cursor: pointer;
	padding-top: 2px;
	padding-inline: 3px;
	&:hover {
		background-color: #f9f9f9;
		border-radius: 50%;
	}
	svg {
		width: 35px;
		height: 35px;
	}
`;

export const PostUtilitySection = styled.div`
	width: 100%;
	display: flex;
	justify-content: space-between;
	align-items: center;
	div {
		padding-inline: 10px;
		display: flex;
		align-items: center;
		gap: 4px;
		color: grey;
		transition: all 0.2s ease-in-out;
		cursor: pointer;
		&:hover {
			color: black;
		}
		p {
			font-size: 1.3rem;
		}
		svg {
			width: 23px;
		}
	}
`;
