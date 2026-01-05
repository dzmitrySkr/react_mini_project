import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    search: "",
    limit: 10,
    page: 1,
};

const productsUiSlice = createSlice({
    name: "productsUi",
    initialState,
    reducers: {
        setSearch(state, action) {
            state.search = action.payload;
            state.page = 1;
        },
        setLimit(state, action) {
            state.limit = action.payload;
            state.page = 1;
        },
        setPage(state, action) {
            state.page = action.payload;
        }
    },
});

export const { setSearch, setLimit, setPage } = productsUiSlice.actions;
export default productsUiSlice.reducer;