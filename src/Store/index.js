import { configureStore } from "@reduxjs/toolkit";
import adminSlice from "./Admin-slice";
import authSlice from "./Auth-Slice";

const store=configureStore({
    reducer:{
        auth:authSlice.reducer,
        admin:adminSlice.reducer
    }
})
export default store