import { useEffect, useState } from "react";
import "./App.css";
import { useLocalStorage } from "react-use";

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

	return <div className="App">{message && <h1>{message}</h1>}</div>;
}

export default App;
