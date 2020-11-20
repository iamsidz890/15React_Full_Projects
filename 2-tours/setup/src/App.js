import React, { useState, useEffect } from "react";
import Loading from "./Loading";
import Tours from "./Tours";

const url = "https://course-api.netlify.app/api/react-tours-project";
function App() {
	const [loading, setLoading] = useState(false);
	const [tours, setTours] = useState([]);

	const removeTour = (id) => {
		const newTour = tours.filter((tour) => tour.id !== id);
	};

	const fetchTours = async () => {
		setLoading(true); //set to true just in case its false..
		try {
			const response = await fetch(url);
			const tours = await response.json();
			console.log(tours);

			setLoading(false);
			setTours(tours);
		} catch (error) {
			setLoading(false);
			console.log(error);
		}

		// console.log(tours);
	};

	useEffect(() => {
		fetchTours();
	}, []);

	if (loading) {
		return <Loading />;
	}
	return (
		<main>
			<Tours tours={tours} removeTour={removeTour} />
		</main>
	);
}

export default App;
