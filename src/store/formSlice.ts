import { createSlice } from "@reduxjs/toolkit";

export const formSlice = createSlice({
    name: "form",
    initialState: {
        name: "",
        emailAddress: "",
        phoneNumber: "",
        plan:"",
        billingFrequency:"",
        addOns:[""]
    },
    reducers: {
        updateForm: (state, action) => {
            return {
                ...state,
                ...action.payload
            };
        },
    },
});


export const {updateForm} = formSlice.actions;

export default formSlice.reducer;