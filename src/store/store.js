import { configureStore } from "@reduxjs/toolkit";
import { animalsApi } from "./middlewares/animalsApi";
import { productsApi } from "./middlewares/productsApi";
import { bestProductsApi } from "./middlewares/bestProductApi";
import { bestSalesApi } from "./middlewares/bestSalesApi";
import { passwordApi } from "./middlewares/passwordApi";
import { typeApi } from "./middlewares/typeApi";
import { brandApi } from "./middlewares/brandApi";
import getTypeReducer from "./slices/getType";
import getInputValueReducer from './slices/getInputValue'
import getAsideItemReducer from './slices/getAsideItem';
import getCategoriesReducer from "./slices/getCategories";
import getStatusReducer from "./slices/getStatus";
import getIdReducer from "./slices/getId";
import getActivePanelReducer from "./slices/getActivePanel";
import getActiveBtnReducer from "./slices/getActiveBtn";
import getTokenReducer from "./slices/getToken";
import getFormDataReducer from "./slices/getFormData";
import authReducer from "./slices/auth";





export const store = configureStore({
  reducer: {
    [animalsApi.reducerPath]: animalsApi.reducer,
    [productsApi.reducerPath]: productsApi.reducer,
    [bestProductsApi.reducerPath]: bestProductsApi.reducer,
    [bestSalesApi.reducerPath]: bestSalesApi.reducer,
    [passwordApi.reducerPath]: passwordApi.reducer,
    [typeApi.reducerPath]: typeApi.reducer,
    [brandApi.reducerPath]: brandApi.reducer,
    getAsideItem: getAsideItemReducer,
    getInputValue: getInputValueReducer,
    getCategories: getCategoriesReducer,
    getType: getTypeReducer,
    getStatus: getStatusReducer,
    getId: getIdReducer,
    getActivePanel: getActivePanelReducer,
    getActiveBtn: getActiveBtnReducer,
    getToken: getTokenReducer,
    getFormData: getFormDataReducer,
    auth:authReducer,
  },
  middleware: (getDefaultMiddleWare) =>
    getDefaultMiddleWare().concat([
      animalsApi.middleware,
      productsApi.middleware,
      bestProductsApi.middleware,
      bestSalesApi.middleware,
      passwordApi.middleware,
      typeApi.middleware,
      brandApi.middleware,
    ]),
});
