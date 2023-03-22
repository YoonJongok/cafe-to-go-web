import React from "react";
import { Helmet } from "react-helmet-async";

interface PageTitle {
	title: string;
}
export const PageTitle: React.FC<PageTitle> = ({ title }) => {
	return (
		<Helmet>
			<title>{title} | Cafe To Go</title>
		</Helmet>
	);
};
