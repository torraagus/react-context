import React from "react";
// import logo from './logo.svg';
import "./App.css";
import ComponentC from "./components/ComponentC";
import { UserProvider } from "./components/userContext";

function App() {
	const data = 1; // int
	//const data = false; // boolean
	//const data = "John"; // string
	//const data = [1,3,"name",false]; // array
	//const data = { id: 1323546, name: "Agustin", age: 28 }; // object
	return (
		<div className="App">
			<UserProvider value={data}>
				<ComponentC />
			</UserProvider>
		</div>
	);
}

export default App;
