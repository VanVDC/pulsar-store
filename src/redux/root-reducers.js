import { combineReducers } from "redux";

import { userReducer } from "./user/user.reducer";
import cartReducer from "./cart/cart.reducer";

export const rootReducers = combineReducers({
  user: userReducer,
  cart: cartReducer
});
