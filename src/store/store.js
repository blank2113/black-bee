import { configureStore } from "@reduxjs/toolkit";
import { animalsApi } from "./animalsApi";
import { productsApi } from "./productsApi";
import { bestProductsApi } from "./bestProductApi";
import { bestSalesApi } from "./bestSalesApi";
import getTypeReducer from "./getType";

export const store = configureStore({
  reducer: {
    [animalsApi.reducerPath]: animalsApi.reducer,
    [productsApi.reducerPath]: productsApi.reducer,
    [bestProductsApi.reducerPath]: bestProductsApi.reducer,
    [bestSalesApi.reducerPath]: bestSalesApi.reducer,
    getType: getTypeReducer,
  },
  middleware: (getDefaultMiddleWare) =>
    getDefaultMiddleWare().concat([
      animalsApi.middleware,
      productsApi.middleware,
      bestProductsApi.middleware,
      bestSalesApi.middleware,
    ]),
});
