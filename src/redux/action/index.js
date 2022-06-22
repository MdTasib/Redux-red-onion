import { ADD_TO_CART, DELETE_TO_CART } from "../Types";

const addToCart = product => {
	return {
		type: ADD_TO_CART,
		payload: product,
	};
};

const deleteToCart = product => {
	return {
		type: DELETE_TO_CART,
		payload: product,
	};
};

export { addToCart, deleteToCart };
