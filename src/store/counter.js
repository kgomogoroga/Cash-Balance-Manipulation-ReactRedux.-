import { createSlice } from "@reduxjs/toolkit";
export const counterSlice = createSlice({
    // This is the name of the slice of state that we will implement in our
    // empty store.
    name: "counter",
    // This is the initial state for your slice of state. This can be
    // anything from an empty array or other data structure that your
    // application requires to avoid prop drilling.
    // For this example, we use a number.
    initialState: {
        value: 0,
    },
    // As indicated before. The reducer is used to manipulate the initial
    // state or current state.
    reducers: {
        // deduct charges from the amount of 15%
        deductChargesFromAmount: (state) => {
            state.value = state.value * 0.85;
        },
        // multiplies by interest amount of 5%
        addInterestToAmount: (state) => {
            state.value = state.value * 1.05;
        },
        // decrements by amount provided by user form
        decrementByAmount: (state, action) => {
            state.value -= action.payload;
        },
        // increments by amount provided by user form
        incrementByAmount: (state, action) => {
            state.value += action.payload;
        },
    },
});
// Action creators are generated for each case reducer function.
export const { deductChargesFromAmount, addInterestToAmount, decrementByAmount, incrementByAmount } = counterSlice.actions;
// Exporting the reducer function we will implement into our empty store, previously created.
export default counterSlice.reducer;