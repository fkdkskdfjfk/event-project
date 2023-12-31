import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  subject: [],
  month: [],
  location: [],
  category: [],
  button: false
};

const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    getSubject: (state, action) => {
      state.subject = action.payload;
    },
    getMonth: (state, action) => {
      state.month = action.payload;
    },
    getLocation: (state, action) => {
      state.location = action.payload;
    },
    getCategory: (state, action) => {
      state.category = action.payload;
    },
    getButton: (state, action) => {
      state.button = action.payload
    }
  }
});

// 액션 생성 함수
export const { getSubject, getMonth, getLocation, getCategory, getButton } = searchSlice.actions;

// 선택자 함수
export const searchSubject = (state) => state.search.subject;
export const searchMonth = (state) => state.search.month;
export const searchLocation = (state) => state.search.location;
export const searchCategory = (state) => state.search.category;
export const searchButton = state => state.search.button;

// 리듀서 함수
export default searchSlice.reducer;