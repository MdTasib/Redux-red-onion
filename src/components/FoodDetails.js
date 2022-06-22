import React from "react";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import useSelectedFood from "../hooks/useSelectedFood";
import cartIcon from "../images/icons/cart.png";
import { addToCart } from "../redux/action";

const FoodDetails = () => {
	const { id } = useParams();
	const [selectedFood, setSelectedFood] = useSelectedFood(id);
	const dispatch = useDispatch();

	const addCart = product => {
		dispatch(addToCart(product));
	};

	return (
		<div className='container py-5'>
			<div className='row align-items-center'>
				<div className='col-md-6'>
					<h2>{selectedFood?.name}</h2>
					<small>{selectedFood?.description}</small>
					<h4 className='pt-3'>$ {selectedFood?.price}</h4>
					<button
						className='btn btn-outline-danger'
						onClick={() => addCart(selectedFood)}>
						<img src={cartIcon} width='30' alt='' /> ADD
					</button>
				</div>
				<div className='col-md-6 text-end'>
					<img src={selectedFood?.image} className='w-75' alt='' />
				</div>
			</div>
		</div>
	);
};

export default FoodDetails;
