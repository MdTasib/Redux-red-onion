import React from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Checkout = () => {
	const navigate = useNavigate();
	const state = useSelector(state => state.cartReducer);

	let price = 0;
	state.forEach(food => {
		price += food.price * food.qty;
	});

	let tax = Number(price) / 10;
	let deliveryFee = Number(price) / 20;
	let total = Number(price) + tax + deliveryFee;

	const handleDeliver = event => {
		event.preventDefault();
		navigate("/purchase");
	};
	return (
		<div className='container row justify-content-between'>
			<div className='col-md-6'>
				<div className='p-5'>
					<div className='container'>
						<h4 className='border-bottom border-2 pb-2'>
							Edit Delivery Details
						</h4>
						<form onSubmit={handleDeliver}>
							<input
								type='text'
								className='form-control my-3'
								placeholder='Your Name'
								name='name'
								required
							/>
							<input
								type='text'
								className='form-control my-3'
								placeholder='Rood No'
								name='rood'
								required
							/>
							<input
								type='text'
								className='form-control my-3'
								placeholder='Flat, suite and floor'
								name='floor'
								required
							/>
							<input
								type='text'
								className='form-control my-3'
								placeholder='Business Name'
								name='business'
								required
							/>
							<input
								type='submit'
								className='form-control btn btn-danger'
								value='Save & Continue'
							/>
						</form>
					</div>
				</div>
			</div>
			<div className='col-md-6 pt-5'>
				<h4 className='border-bottom border-2 pb-2'>Checkout</h4>
				<div className='row justify-content-between align-items-center py-2 my-2 bg-light rounded shadow-sm'>
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
			</div>
		</div>
	);
};

export default Checkout;
