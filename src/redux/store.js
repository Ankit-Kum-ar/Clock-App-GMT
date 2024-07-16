import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./Slices/userSlice";

const store = configureStore({
    reducer: {
        // Add reducers here
        user: userReducer
    }
})

export default store;