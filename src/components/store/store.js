import { configureStore } from "@reduxjs/toolkit";
import RootReducer from "../reducers/RootReducer";

// Now, use the combined reducer in the store configuration.
console.log("inside store.js");
const store = configureStore({
    reducer : RootReducer
})
console.log("outside of store.js");


export default store;