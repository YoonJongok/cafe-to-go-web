import AppRoutes from "./screens/AppRoutes";
import Layout from "./components/Layout";
import { GlobalStyles } from "./theme/global.styled";

function App() {
	return (
		<Layout>
			<GlobalStyles />
			<AppRoutes />
		</Layout>
	);
}

export default App;
