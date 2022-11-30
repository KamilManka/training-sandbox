import { createSlice } from "@reduxjs/toolkit";


export const orderSlice = createSlice({
    name: "order",
    initialState: {
        invoiceOrders: []
    },
    reducers: {
        addToInvoice: (state, action) => {
            if (!state.invoiceOrders.includes(action.payload)) {
                state.invoiceOrders = [...state.invoiceOrders, action.payload]
                console.log(state.invoiceOrders);
            }
            
        },
        removeFromInvoice: (state, action) => {
            // if (state.invoiceOrders.includes(action.payload)) {
        
                let index = state.invoiceOrders.indexOf(action.payload)
                //TODO: if index = -1 nie wycinamy
                state.invoiceOrders.splice(index, 1)
                console.log(state.invoiceOrders);
            // }
        },
        reset: (state) => {
            state.invoiceOrders = [];
        }
    }
})

export const {addToInvoice, removeFromInvoice, reset} = orderSlice.actions;
export default orderSlice.reducer;