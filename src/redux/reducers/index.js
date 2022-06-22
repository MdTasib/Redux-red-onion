import { combineReducers } from "redux";
import cartReducer from "./cartReducers";

const rootReducers = combineReducers({ cartReducer });

export default rootReducers;
