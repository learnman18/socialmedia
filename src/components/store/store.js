import { configureStore } from "@reduxjs/toolkit";
import RootReducer from "../reducers/RootReducer";

// Now, we are connecting the reducers uing configureStore
console.log("inside store.js");
const store = configureStore({
    reducer : RootReducer
})
console.log("outside of store.js");


export default store;