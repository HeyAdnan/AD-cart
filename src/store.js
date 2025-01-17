// Desc: Redux store configuration
//store act as entire state for the application
import { configureStore } from "@reduxjs/toolkit";
import carReducer from"./features/cart/cartSlice";
import modalReducer from"./features/modal/modalSlice";

export const store = configureStore({
    reducer:{
        cart:carReducer,
        modal:modalReducer,
    },
})
