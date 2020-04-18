import { combineReducers } from "redux";

import cartReducer from "./cartReducer";
import modalReducer from "./modalReducer";
// import filterReducer from "./filterReducer";

export default combineReducers({
  cart: cartReducer,
  modal: modalReducer,
  // filter: filterReducer,
});
