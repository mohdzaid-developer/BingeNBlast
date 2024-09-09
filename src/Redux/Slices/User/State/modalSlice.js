import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isModalOpen: false,
  info: null,
};

const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    setModalOpen(state) {
      state.isModalOpen = true;
    },
    setModalClose(state) {
      state.isModalOpen = false;
    },
    setInfo(state, action) {
      state.info = action.payload;
    },
  },
});

export const { setModalOpen, setModalClose, setInfo } = modalSlice.actions;
export default modalSlice.reducer;
