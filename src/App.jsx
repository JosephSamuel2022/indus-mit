import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import SymbolRow from "./SymbolRow";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function App() {
	return (
		<>
			<Routes>
				<Route path='/' element={<SymbolRow />}></Route>
			</Routes>
			<ToastContainer />
		</>
	);
}

export default App;
