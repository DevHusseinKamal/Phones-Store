import { createSlice } from "@reduxjs/toolkit";

const initialState = { showLoading: true, title: null, modalOpen: false };

const uiSlice = createSlice({
  name: "UI",
  initialState,
  reducers: {
    show(state, action) {
      state.showLoading = action.payload.value;
      state.title = action.payload.title;
    },
    openModal(state) {
      state.modalOpen = true;
    },
    closeModal(state) {
      state.modalOpen = false;
    },
  },
});

export const uiActions = uiSlice.actions;

export default uiSlice;
