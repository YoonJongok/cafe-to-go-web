import { BrowserRouter } from "react-router-dom";
import Router from "./screens/Router";
import { GlobalStyles } from "./theme/global.styled";

function App() {
	return (
		<BrowserRouter>
			<GlobalStyles />
			<Router />
		</BrowserRouter>
	);
}

export default App;
