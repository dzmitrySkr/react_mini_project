import { configureStore } from '@reduxjs/toolkit';
import { dummyApi } from './dymmyApi';
import productsUiSlice from "./ProducSlicer";

export const store = configureStore({
    reducer: {
        [dummyApi.reducerPath]: dummyApi.reducer,
        productsUi: productsUiSlice,

    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(dummyApi.middleware),
});