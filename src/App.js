import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Footer from "./shared/Footer";
import Navbar from "./shared/Navbar";
import Login from "./pages/Login";
import Singup from "./pages/Singup";
import FoodDetails from "./pages/FoodDetails";
import { Provider } from "react-redux";
import store from "./redux/store";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import Purchase from "./pages/Purchase";

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
						<Route path='/checkout' element={<Checkout />} />
						<Route path='/purchase' element={<Purchase />} />
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
