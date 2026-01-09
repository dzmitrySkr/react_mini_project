import { createSlice } from "@reduxjs/toolkit";


let initialDataModal = {
    cardNumber: "",
    expiry: "",
    owner: "Gregorz Brzerzenszchykewich",
}

let savedCard;
try {
    savedCard = JSON.parse(localStorage.getItem("modalData"));
} catch {
    savedCard = null;
}


const initialState = {
    isModalOpen: false,
    cardData: savedCard || initialDataModal
};

const modalSlice = createSlice({
    name: "modal",
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
        },
    },
});


export const saveUserMiddleWare = (store) => (next) => (action) => {
    const result = next(action);

    if (action.type === "modal/saveCardData") {
        try {
            const state = store.getState();
            localStorage.setItem("modalData", JSON.stringify(state.modal.cardData));
        } catch (e) {
            console.error("Failed to save card data", e);
        }
    }

    return result;
};



export const { openModal, closeModal, saveCardData } = modalSlice.actions;
export default modalSlice.reducer;