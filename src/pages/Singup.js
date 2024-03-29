import React from "react";
import "../styles/singup.css";
import logo from "../images/extra/logo2.png";
import { Link } from "react-router-dom";

const Singup = () => {
	return (
		<div className='singup p-5'>
			<div className='container w-50'>
				<div className='text-center pb-3'>
					<img src={logo} className='img-fluid' width='300' alt='...' />
				</div>
				<form className='px-5'>
					<input type='text' className='form-control my-3' placeholder='Name' />
					<input
						type='email'
						className='form-control my-3'
						placeholder='Email'
					/>
					<input
						type='password'
						className='form-control my-3'
						placeholder='Password'
					/>
					<input
						type='password'
						className='form-control my-3'
						placeholder='Confirm Password'
					/>
					<input
						type='submit'
						className='form-control btn btn-danger'
						value='Sing In'
					/>
				</form>
				<div className='text-center pt-3'>
					<Link to='/login' className='text-decoration-none text-danger'>
						<small>Already have an account ?</small>
					</Link>
				</div>
			</div>
		</div>
	);
};

export default Singup;
