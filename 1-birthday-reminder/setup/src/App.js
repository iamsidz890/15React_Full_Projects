import React, { useState } from "react";
import data from "./data";
import List from "./List";
function App() {
	const [people, setpeople] = useState(data); // name set by us ......name nahi use kiya haii udar islyy posible
	return (
		<main>
			<section className='container'>
				<h3>{people.length} Birthdays today..</h3>
				<List peoples={people} />
				<button onClick={() => setpeople([])}>Clear all</button>
			</section>
		</main>
	);
}

export default App;
