import { configureStore } from "@reduxjs/toolkit";
import carReducer from "./reducer/counterSlice";

export const store = configureStore({
	reducer: {
		car: carReducer,
	},
});
