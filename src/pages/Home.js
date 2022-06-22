import React from "react";
import Banner from "../components/Banner";
import FoodContainer from "../components/FoodContainer";
import ReviewContainer from "../components/ReviewContainer";

const Home = () => {
	return (
		<div>
			<Banner />
			<FoodContainer />
			<ReviewContainer />
		</div>
	);
};

export default Home;
