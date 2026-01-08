import { configureStore } from '@reduxjs/toolkit';
import { dummyApi } from './DymmyApi';
import productsUiSlice from "./ProducSlicer";
import modalSlice from "./ModalSlicer";

export const store = configureStore({
    reducer: {
        [dummyApi.reducerPath]: dummyApi.reducer,
        productsUi: productsUiSlice,
        modal:modalSlice,

    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(dummyApi.middleware),
});