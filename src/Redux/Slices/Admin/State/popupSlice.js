import { createSlice } from "@reduxjs/toolkit";

const initialState = { open: false,  };

const popupSlice = createSlice({
  name: "popup",
  initialState,
  reducers: {
    handlePopupOpen(state) {
      state.open = true;
    },
    handlePopupClose(state) {
      state.open = false;
    },
  },
});

export const { handlePopupOpen, handlePopupClose } = popupSlice.actions;
export default popupSlice.reducer;
