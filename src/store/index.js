import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./auth-slice";
import cartSlice from "./cart.slice";
import uiSlice from "./ui-slice";

const store = configureStore({
  reducer: {
    auth: authSlice,
    cart: cartSlice,
    ui: uiSlice,
  },
});

export default store;
