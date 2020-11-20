import React, { useState } from "react";
import data from "./data";
import SingleQuestion from "./Question";
function App() {
	// const [index, setIndex] = useState(0);

	const [questions, setQuestions] = useState(data);
	return (
		<main>
			<div className='container'>
				<h3>questions and answer about login</h3>
				<section className='info'>
					{questions.map((ques) => {
						return <SingleQuestion key={ques.id} {...ques} />;
					})}
				</section>
			</div>
		</main>
	);
}

export default App;
