import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { addToCart, deleteToCart } from "../redux/action";

const Cart = () => {
	const dispatch = useDispatch();
	const state = useSelector(state => state.cartReducer);

	const addProduct = product => {
		dispatch(addToCart(product));
	};

	const deleteProduct = product => {
		dispatch(deleteToCart(product));
	};

	let price = 0;
	state.forEach(food => {
		price += food.price * food.qty;
	});

	let tax = Number(price) / 10;
	let deliveryFee = Number(price) / 20;
	let total = Number(price) + tax + deliveryFee;

	return (
		<div className='container py-5'>
			{state.map(food => (
				<div
					key={food.id}
					className='row align-items-center py-2 my-2 bg-light rounded-pill shadow-sm'>
					<div className='col-md-6'>
						<img src={food?.image} width='150' height='' alt='' />
					</div>
					<div className='col-md-6'>
						<p className='fw-bold text-danger m-0'>{food?.name}</p>
						<small className='text-secondary text-uppercase'>
							{food.category}
						</small>
						<p className='fw-bold m-0 py-1'>
							Total: {food.price} X {food.qty} = ${" "}
							{(food.price * food.qty).toFixed(2)}
						</p>
						<button
							className='btn btn-outline-danger me-2'
							onClick={() => deleteProduct(food)}>
							<i className='fa fa-minus'></i>
						</button>
						<button
							className='btn btn-outline-danger me-2'
							onClick={() => addProduct(food)}>
							<i className='fa fa-plus'></i>
						</button>
					</div>
				</div>
			))}
			<div className='row justify-content-between align-items-center py-2 my-4 bg-light rounded shadow-sm'>
				<div className='col-md-6'>
					<p className='m-0'>Price</p>
					<p className='m-0'>Tax</p>
					<p className='m-0'>Delivery Fee</p>
					<p className='m-0'>Total</p>
				</div>
				<div className='col-md-6'>
					<p className='m-0 fw-bold text-danger'>$ {price}</p>
					<p className='m-0 fw-bold text-danger'>$ {tax}</p>
					<p className='m-0 fw-bold text-danger'>$ {deliveryFee}</p>
					<p className='m-0 fw-bold text-danger'>$ {total}</p>
				</div>
			</div>
			<div className='text-center pt-4'>
				<Link to='/checkout' className='btn btn-danger w-25'>
					CHECK OUT
				</Link>
			</div>
		</div>
	);
};

export default Cart;
