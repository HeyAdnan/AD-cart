import { createSlice } from "@reduxjs/toolkit";
const initialState = {  
    isOpen: false,
};
const modalslice = createSlice({
    name:"modal",
    initialState,
    reducers: {
        openModal: (state) => {
            state.isOpen = true;
        },
        closeModal: (state) => {
            state.isOpen = false;
        },
    },
});
export const { openModal, closeModal } = modalslice.actions;
export default modalslice.reducer;