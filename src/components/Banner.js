import React from "react";
import "../styles/banner.css";

const Banner = () => {
	return (
		<header className='text-center banner'>
			<div className='container'>
				<h2>BEST FOODS WAITING FOR YOUR BELLY</h2>
				<div className='d-flex w-50 mx-auto'>
					<input
						className='form-control me-2'
						type='search'
						placeholder='Search'
						aria-label='Search'
					/>
					<button disabled className='btn btn-danger' type='submit'>
						Search
					</button>
				</div>
			</div>
		</header>
	);
};

export default Banner;
