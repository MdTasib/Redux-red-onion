import { useEffect, useState } from "react";
import useFood from "./useFood";

const useSelectedFood = id => {
	const [foods, setFoods] = useFood();
	const [selectedFood, setSelectedFood] = useState({});

	useEffect(() => {
		const detailsFood = foods.find(food => food.id == id);
		setSelectedFood(detailsFood);
	}, [id, foods]);

	return [selectedFood, setSelectedFood];
};

export default useSelectedFood;
