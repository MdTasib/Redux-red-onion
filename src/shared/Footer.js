import React from "react";
import logo from "../images/extra/logo.png";

const Footer = () => {
	return (
		<div className='bg-dark py-5 text-light'>
			<div className='container'>
				<div className='row'>
					<div className='col-md-3'>
						<img src={logo} alt='' height='50' />
						<p className='pt-4'>
							Copyright &copy; {new Date().getFullYear()} Online Food
						</p>
					</div>
					<div className='col-md-3'></div>
					<div className='col-md-3'>
						<ul className='list-unstyled'>
							<li>
								<small>About Online Food</small>
							</li>
							<li>
								<small>Read Out Food</small>
							</li>
							<li>
								<small>Sing Up To Deliver</small>
							</li>
							<li>
								<small>Add Your Resturant</small>
							</li>
						</ul>
					</div>
					<div className='col-md-3'>
						<ul className='list-unstyled'>
							<li>
								<small>Get Help</small>
							</li>
							<li>
								<small>Read FQAs</small>
							</li>
							<li>
								<small>View All Clints</small>
							</li>
							<li>
								<small>Resturants Near Me</small>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Footer;
