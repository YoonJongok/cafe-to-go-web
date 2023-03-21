import styled from "styled-components";

export const LayoutContainer = styled.div`
	width: 100%;
	min-height: 100vh;
	height: 100%;
	background: ${({ theme }) => theme.bgColor};
`;
