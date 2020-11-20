import React from "react";

const List = ({ peoples }) => {
	return (
		<>
			{peoples.map((person) => {
				const { id, name, age, image } = person;
				return (
					<article className='person'>
						<img src={image}></img>
						<div>
							<h4>{name}</h4>
							<p>{age}</p>
						</div>
					</article>
				);
			})}
		</>
	);
};

export default List;
