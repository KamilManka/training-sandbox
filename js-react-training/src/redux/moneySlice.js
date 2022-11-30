import { createSlice } from '@reduxjs/toolkit'

export const moneySlice = createSlice({
    name: "money",
    initialState: {value: 0},
    reducers: {
        withdraw: (state, action) => {
            state.value -= action.payload;
        },
        deposit: (state, action) => {
            state.value += action.payload;
        }
    }
});

export const {withdraw, deposit} = moneySlice.actions;
export default moneySlice.reducer; 