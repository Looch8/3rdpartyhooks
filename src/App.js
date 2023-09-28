import { useEffect, useState } from "react";
import "./App.css";
import { useLocalStorage } from "react-use";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import NumberGrabber from "./NumberGrabber";

function App() {
	const [storedMessage, setStoredMessage] = useLocalStorage("message", ""); // Save message to local storage
	const [message, setMessage] = useState("");

	// component is loaded
	// gap of time
	// component is rendered
	// gap of time
	// componentDidMount aka useEffect(() => {}, [])
	// gap of time
	// comononentWillUpdate aka useEffect(() => {}, [message])

	useEffect(() => {
		setMessage(storedMessage);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	useEffect(() => {
		// Do something whenever message updates
		setStoredMessage(message);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [message]);

	return (
		<div className="App">
			{message && <h1>{message}</h1>}

			<BrowserRouter>
				<ul>
					<li>
						<Link to="/1">Page 1</Link>
					</li>
					<li>
						<Link to="/2">Page 2</Link>
					</li>
				</ul>

				<Routes>
					<Route path="/:id" element={<NumberGrabber />} />
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
