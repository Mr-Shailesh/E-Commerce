import { combineReducers } from "redux";
import { ProductReducer } from "./Product/ProductReducer";

const rootReducer = combineReducers({
  product: ProductReducer,
});

export default rootReducer;
