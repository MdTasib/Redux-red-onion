import { ADD_TO_CART, DELETE_TO_CART } from "../Types";

// initial cart sate
const initialCart = [];

// cart reducer function
const cartReducer = (state = initialCart, action) => {
	switch (action.type) {
		case ADD_TO_CART:
			// check product is already exist
			const exist = state.find(product => product.id === action.payload.id);
			// if product already added, then increase the quantity
			if (exist) {
				return state.map(product =>
					product.id === action.payload.id
						? { ...product, qty: product.qty + 1 }
						: product
				);
			} else {
				return [...state, { ...action.payload, qty: 1 }];
			}

		case DELETE_TO_CART:
			// check product is already exist
			const exist1 = state.find(product => product.id === action.payload.id);
			// if product already added, then decrease the quantity
			if (exist1.qty === 1) {
				return state.filter(product => product.id !== exist1.id);
			} else {
				return state.map(product =>
					product.id === action.payload.id
						? { ...product, qty: product.qty - 1 }
						: product
				);
			}

		default:
			return state;
	}
};

export default cartReducer;
