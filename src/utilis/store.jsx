import { configureStore } from "@reduxjs/toolkit";
import songReducer from "./songdetails";

export const store = configureStore({
  reducer: {
    song: songReducer,
  },
});
