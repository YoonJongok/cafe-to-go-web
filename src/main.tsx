import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { ApolloProvider } from "@apollo/client";
import client from "./api/client";
import { ThemeProvider } from "styled-components";
import { theme } from "./theme/theme.styled";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { HelmetProvider } from "react-helmet-async";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
	<React.StrictMode>
		<HelmetProvider>
			<ApolloProvider client={client}>
				<ThemeProvider theme={theme}>
					<App />
					<ToastContainer />
				</ThemeProvider>
			</ApolloProvider>
		</HelmetProvider>
	</React.StrictMode>
);
