import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  open: false,
  title: "",
  formData: { itemsName: "", details: "", price: "", },
  path: "",
  isEdit: false,
  id: "",
};

const formSlice = createSlice({
  name: "form",
  initialState,
  reducers: {
    handleFormTitle(state, action) {
      state.title = action.payload;
    },
    handleFormOpen(state) {
      state.open = true;
    },
    handleFormClose(state) {
      state.open = false;
      state.path = "";
    },
    handlePath(state, action) {
      state.path = action.payload;
    },
    setFormData(state, action) {
      state.formData = { ...state.formData, ...action.payload };
    },

    setEditItem(state, action) {
      state.isEdit = action.payload;
    },
    getItemId(state, action) {
      state.id = action.payload;
    },
  },
});

export const {
  handleFormOpen,
  handleFormClose,
  handleFormTitle,
  setFormData,
  setEditItem,
  handlePath,
  getItemId,
} = formSlice.actions;
export default formSlice.reducer;
