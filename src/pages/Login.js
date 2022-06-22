import React from "react";
import logo from "../images/extra/logo2.png";
import { Link } from "react-router-dom";

const Login = () => {
	return (
		<div className='singup p-5'>
			<div className='container w-50'>
				<div className='text-center pb-3'>
					<img src={logo} className='img-fluid' width='300' alt='...' />
				</div>
				<form className='px-5'>
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
						type='submit'
						className='form-control btn btn-danger'
						value='Login'
					/>
				</form>
				<div className='text-center pt-3'>
					<small>Don't have account ?</small>
					<Link to='/singup' className='text-decoration-none text-danger mx-2'>
						Singup Now
					</Link>
				</div>
			</div>
		</div>
	);
};

export default Login;
