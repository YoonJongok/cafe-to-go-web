import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "../Home";

function AppRoutes() {
	return (
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="*" element={<Navigate replace to={"/"} />} />
		</Routes>
	);
}

export default AppRoutes;
