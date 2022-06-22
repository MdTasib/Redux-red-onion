import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import logo from "../images/extra/logo2.png";
import cartIcon from "../images/icons/cart.png";

const Navbar = () => {
	const state = useSelector(state => state.cartReducer);

	return (
		<nav className='navbar navbar-expand-lg navbar-light'>
			<div className='container'>
				<Link className='navbar-brand' to='/'>
					<img src={logo} alt='' height='50' />
				</Link>
				<button
					className='navbar-toggler'
					type='button'
					data-bs-toggle='collapse'
					data-bs-target='#navbarNav'
					aria-controls='navbarNav'
					aria-expanded='false'
					aria-label='Toggle navigation'>
					<span className='navbar-toggler-icon'></span>
				</button>
				<div className='collapse navbar-collapse' id='navbarNav'>
					<ul className='navbar-nav ms-auto'>
						<li className='nav-item'>
							<Link className='nav-link' to='/cart'>
								<img src={cartIcon} alt='' height='30' />
								<small className='bg-danger text-white px-2 py-1 ms-2 rounded-circle'>
									{state.length}
								</small>
							</Link>
						</li>
						<li className='nav-item'>
							<Link className='nav-link active' aria-current='page' to='/home'>
								<small>Home</small>
							</Link>
						</li>
						<li className='nav-item mx-2'>
							<Link className='nav-link' to='/login'>
								<small>Login</small>
							</Link>
						</li>
						<li className='nav-item'>
							<Link className='nav-link' to='/singup'>
								<small>Sing Up</small>
							</Link>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
