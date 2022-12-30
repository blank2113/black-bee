import { configureStore } from "@reduxjs/toolkit";
import { animalsApi } from "./middlewares/animalsApi";
import { productsApi } from "./middlewares/productsApi";
import { bestProductsApi } from "./middlewares/bestProductApi";
import { bestSalesApi } from "./middlewares/bestSalesApi";
import { passwordApi } from "./middlewares/passwordApi";
import getTypeReducer from "./slices/getType";
import getInputValueReducer from './slices/getInputValue'
import getAsideItemReducer from './slices/getAsideItem';
import getCategoriesReducer from "./slices/getCategories";
import getStatusReducer from "./slices/getStatus";


export const store = configureStore({
  reducer: {
    [animalsApi.reducerPath]: animalsApi.reducer,
    [productsApi.reducerPath]: productsApi.reducer,
    [bestProductsApi.reducerPath]: bestProductsApi.reducer,
    [bestSalesApi.reducerPath]: bestSalesApi.reducer,
    [passwordApi.reducerPath]: passwordApi.reducer,
    getAsideItem: getAsideItemReducer,
    getInputValue: getInputValueReducer,
    getCategories: getCategoriesReducer,
    getType: getTypeReducer,
    getStatus: getStatusReducer,

  },
  middleware: (getDefaultMiddleWare) =>
    getDefaultMiddleWare().concat([
      animalsApi.middleware,
      productsApi.middleware,
      bestProductsApi.middleware,
      bestSalesApi.middleware,
      passwordApi.middleware,
    ]),
});
