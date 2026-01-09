import { configureStore } from '@reduxjs/toolkit';
import { dummyApi } from './DummyApi';
import productsUiSlice from "./ProductSlicer";
import modalSlice, {saveUserMiddleWare}from "./ModalSlicer";

export const store = configureStore({
    reducer: {
        [dummyApi.reducerPath]: dummyApi.reducer,
        productsUi: productsUiSlice,
        modal:modalSlice,

    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(dummyApi.middleware).concat(saveUserMiddleWare),
});