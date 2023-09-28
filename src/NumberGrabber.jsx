import { useParams } from "react-router-dom";

export default function NumberGrabber() {
	const { id } = useParams;
	return (
		<div>
			<h1>The number that this component grabbed is: {id}</h1>
		</div>
	);
}
