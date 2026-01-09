import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./features/cartSlice";
import themeReducer from "./features/themeSlice";

const store = configureStore({
    reducer: {
    cart: cartReducer,
    theme: themeReducer,
    },
    
});


export default store;
