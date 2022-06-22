import React, { useState } from "react";
import useFood from "../hooks/useFood";
import Food from "./Food";

const FoodContainer = () => {
	const [foods, setFoods] = useFood();
	const [filterFood, setFilterFood] = useState([]);

	const handleBreakfast = () => {
		onFilter("breakfast");
	};

	const handleDinner = () => {
		onFilter("dinner");
	};

	const handleLunch = () => {
		onFilter("lunch");
	};

	const onFilter = category => {
		const filteredFood = foods.filter(food => food.category === category);
		setFilterFood(filteredFood);
	};

	return (
		<div className='container'>
			<div className='py-5'>
				<ul className='d-flex justify-content-center list-unstyled'>
					<li>
						<button
							onClick={handleBreakfast}
							className='btn btn-outline-danger fw-bold'>
							Breakfast
						</button>
					</li>
					<li className='mx-3'>
						<button
							onClick={handleDinner}
							className='btn btn-outline-danger fw-bold'>
							Dinner
						</button>
					</li>
					<li>
						<button
							onClick={handleLunch}
							className='btn btn-outline-danger fw-bold'>
							Lunch
						</button>
					</li>
				</ul>
			</div>

			<div className='py-4 mb-3'>
				<div className='row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4'>
					{filterFood.length === 0
						? foods.slice(0, 6).map(food => <Food key={food.id} food={food} />)
						: filterFood.map(food => <Food key={food.id} food={food} />)}
				</div>
			</div>
		</div>
	);
};

export default FoodContainer;
