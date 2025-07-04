import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "../redux/products/productsSlice";
import authReducer from "../redux/auth/authSlice";
export const store = configureStore({
  reducer: {
    products: productsReducer, // Reducer para manejar el estado de los productos
    auth: authReducer, // Reducer para autenticación
  },
});

