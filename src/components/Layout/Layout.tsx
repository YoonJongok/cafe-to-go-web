import React from "react";
import { LayoutContainer } from "./Layout.styled";

interface LayoutProps {
	children: React.ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
	return <LayoutContainer>{children}</LayoutContainer>;
};
