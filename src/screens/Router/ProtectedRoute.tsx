import { makeVar, useReactiveVar } from "@apollo/client";
import React from "react";
import { Navigate } from "react-router-dom";

export const TOKEN = "token";

export const isLoggedInVar = makeVar(Boolean(localStorage.getItem(TOKEN)));

export const logUserIn = (token: string) => {
	localStorage.setItem(TOKEN, token);
	isLoggedInVar(true);
};

export const logUserOut = () => {
	localStorage.removeItem(TOKEN);
	window.location.reload();
};

interface ProtectedRouteProps {
	children: React.ReactNode;
}

export const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
	const isLoggedIn = useReactiveVar(isLoggedInVar);

	if (!isLoggedIn) return <Navigate to="/login" replace={true} />;

	return <>{children}</>;
};
