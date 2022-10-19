import { configureStore } from "@reduxjs/toolkit";
import { useReducer } from "react";
import cartReducer from "./cartRedux";
import userReducer from "./userRedux";


export default configureStore({
    reducer:{
        cart:cartReducer,
        user:userReducer,
    },
});