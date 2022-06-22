import React from "react";

const Review = ({ review }) => {
	const { title, description, image, icon } = review;

	return (
		<div className='col'>
			<div className='card border-0'>
				<img
					src={image}
					className='card-img-top mx-auto w-100 pt-0'
					alt='...'
				/>
				<div className='card-body'>
					<div className='row'>
						<div className='col-md-4'>
							<span className='bg-danger fs-3 py-2 px-3 rounded-circle text-white d-block text-center'>
								<i className={icon}></i>
							</span>
						</div>
						<div className='col-md-8'>
							<p>{title}</p>
							<small className='card-text'>{description}</small>
							<br />
							<p className='pt-3 fw-bold text-danger'>Show More</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Review;
