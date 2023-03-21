import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "../Home";
import Layout from "../../components/Layout";
import { ProtectedRoute } from "./ProtectedRoute";
import { Tv } from "../Tv";
import Register from "../Register";
import Login from "../Login";
import { routes } from "../../config/routes";

export const Router: React.FC = () => {
	return (
		<Layout>
			<Routes>
				<Route
					path={routes.home}
					element={
						<ProtectedRoute>
							<Home />
						</ProtectedRoute>
					}
				/>
				<Route
					path="/tv"
					element={
						<ProtectedRoute>
							<Tv />
						</ProtectedRoute>
					}
				/>
				<Route path={routes.login} element={<Login />} />
				<Route path={routes.register} element={<Register />} />

				<Route path="*" element={<Navigate replace to={"/"} />} />
			</Routes>
		</Layout>
	);
};
