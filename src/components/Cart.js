import React from "react";

const Cart = () => {
	// let price = 0;
	// cart.forEach(food => {
	// 	price += food.price;
	// });

	// let tax = Number(price) / 10;
	// let deliveryFee = Number(price) / 20;
	// let total = Number(price) + tax + deliveryFee;

	return (
		<div className='container py-5'>
			{/* <h3 className='text-danger'>Select Your Foods - {cart.length}</h3>
			{cart.map(food => (
				<div
					key={food.id}
					className='row align-items-center py-2 my-2 bg-light rounded-pill'>
					<div className='col-md-6'>
						<img src={food?.image} width='100' height='' alt='' />
					</div>
					<div className='col-md-6'>
						<p className='fw-bold m-0'>{food?.name}</p>
						<p className='fw-bold text-danger m-0'>${food.price}</p>
						<small className='text-secondary text-uppercase'>
							{food.category}
						</small>
					</div>
				</div>
			))} */}
			<div className='row justify-content-between align-items-center py-2 my-2 bg-light rounded'>
				<div className='col-md-6'>
					<p className='m-0'>Price</p>
					<p className='m-0'>Tax</p>
					<p className='m-0'>Delivery Fee</p>
					<p className='m-0'>Total</p>
				</div>
				<div className='col-md-6'>
					{/* <p className='m-0'>$ {price}</p>
					<p className='m-0'>$ {tax}</p>
					<p className='m-0'>$ {deliveryFee}</p>
					<p className='m-0'>$ {total}</p> */}
				</div>
			</div>
		</div>
	);
};

export default Cart;
