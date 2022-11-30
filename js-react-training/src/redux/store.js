import { combineReducers } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counterSlice";
import authReducer from "./authSlice";
import moneyReducer from "./moneySlice"
import orderReducer from "./orderSlice"

const reducer = combineReducers({
  auth: authReducer,
  counter: counterReducer,
  money: moneyReducer,
  order: orderReducer
});
export const store = configureStore({ reducer });