import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Footer from "./shared/Footer";
import Navbar from "./shared/Navbar";
import Login from "./components/Login";
import Singup from "./components/Singup";
import FoodDetails from "./components/FoodDetails";
import { Provider } from "react-redux";
import store from "./redux/store";
import Cart from "./components/Cart";

function App() {
	return (
		<>
			<BrowserRouter>
				<Provider store={store}>
					<Navbar />
					<Routes>
						<Route path='/' element={<Home />} />
						<Route path='/home' element={<Home />} />
						<Route path='/details/:id' element={<FoodDetails />} />
						<Route path='/cart' element={<Cart />} />
						<Route path='/login' element={<Login />} />
						<Route path='/singup' element={<Singup />} />
					</Routes>
					<Footer />
				</Provider>
			</BrowserRouter>
		</>
	);
}

export default App;
