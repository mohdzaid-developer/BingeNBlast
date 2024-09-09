import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isCheckoutActive: false,
  date: "",
  slot: null,
  person: "",
  price: "",
  theater: {
    theaterName: "",
    price: "",
    noOfPersons: "",
    extraPersonCost: "",
  },
};

const checkoutSlice = createSlice({
  name: "checkout",
  initialState,
  reducers: {
    setCheckoutActive(state, action) {
      state.isCheckoutActive = action.payload;
    },
    setDate(state, action) {
      state.date = action.payload;
    },
    setSlot(state, action) {
      state.slot = action.payload;
    },
    setPerson(state, action) {
      state.person = action.payload;
    },
    setPrice(state, action) {
      state.price = action.payload;
    },
    setTheater(state, action) {
      state.theater = { ...state.theater, ...action.payload };
    },
    setGrandTotal(state, action) {
      state.grandTotal = action.payload;
    },
  },
});

export const {
  setCheckoutActive,
  setDate,
  setSlot,
  setPerson,
  setPrice,
  setTheater,
  setGrandTotal
} = checkoutSlice.actions;
export default checkoutSlice.reducer;
