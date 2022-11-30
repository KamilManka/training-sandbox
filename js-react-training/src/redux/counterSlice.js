import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
  name: "counter", //nazwa reducera
  initialState: { value: 0 }, //stan początkowy
  reducers: {
    //akcje
    incremented: (state) => {
      state.value += 1;
    },
    decremented: (state) => {
      state.value -= 1;
    },
  },
});
export const { incremented, decremented } = counterSlice.actions;
export default counterSlice.reducer;
//export const store = configureStore({ reducer: counterSlice.reducer });