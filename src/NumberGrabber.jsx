import { useNavigate, useParams } from "react-router-dom";

export default function NumberGrabber() {
	const { id } = useParams;

	const navigate = useNavigate();
	return (
		<div>
			<h1>The number that this component grabbed is: {id}</h1>
			{/* This button will allow us to go to home page */}
			{/* Call navigate function to return to home page */}
			<button onClick={() => navigate("/")}>Go Home</button>
		</div>
	);
}
