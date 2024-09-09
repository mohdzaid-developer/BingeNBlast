import { configureStore } from "@reduxjs/toolkit";

// States
import todoReducer from "../Slices/Admin/State/popupSlice";
import formReducer from "../Slices/Admin/State/formSlice";
import authReducer from "../Slices/Admin/State/authSlice";
import checkoutReducer from "../Slices/User/State/checkoutSlice";
import modalReducer from "../Slices/User/State/modalSlice";

// APIs
import { adminApi } from "../Slices/Admin/Api/apiSlice";
import { userApi } from "../Slices/User/Api/apiSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    popup: todoReducer,
    form: formReducer,
    checkout: checkoutReducer,
    modal: modalReducer, 
    [adminApi.reducerPath]: adminApi.reducer,
    [userApi.reducerPath]: userApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(adminApi.middleware)
      .concat(userApi.middleware),
});
