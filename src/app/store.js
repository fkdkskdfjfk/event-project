import { configureStore } from "@reduxjs/toolkit";
import searchReducer from "../features/searchSlice";
import eventListReducer from "../api/eventListSlice";
import likedReducer from "../features/likedSlice";

export const store = configureStore({
  reducer: {
    search: searchReducer,
    eventList: eventListReducer,
    liked: likedReducer,
  }
});