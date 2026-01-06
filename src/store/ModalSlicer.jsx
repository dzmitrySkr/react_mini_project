// features/card/cardSlice.js
import { createSlice } from "@reduxjs/toolkit";

const savedCard = localStorage.getItem("modalData");
const initialState = {
    isModalOpen: false,
    cardData: savedCard ? JSON.parse(savedCard) : {
        cardNumber: "",
        expiry: "",
        owner: "Gregorz Brzerzenszchykewich",
    },
};

const modalSlice = createSlice({
    name: "card",
    initialState,
    reducers: {
        openModal(state) {
            state.isModalOpen = true;
        },
        closeModal(state) {
            state.isModalOpen = false;
        },
        saveCardData(state, action) {
            state.cardData = action.payload;
            localStorage.setItem("modalData", JSON.stringify(action.payload));
        },
    },
});

export const { openModal, closeModal, saveCardData } = modalSlice.actions;
export default modalSlice.reducer;