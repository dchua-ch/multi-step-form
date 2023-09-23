import { createSlice,PayloadAction } from "@reduxjs/toolkit";

interface FormState {
    name: string;
    emailAddress: string;
    phoneNumber: string;
    plan: string;
    billingFrequency: string;
    addOns: string[];
}
const initialState: FormState = {
    name: "",
    emailAddress: "",
    phoneNumber: "",
    plan: "",
    billingFrequency: "",
    addOns: [""],
};

export const formSlice = createSlice({
    name: "form",
    initialState,
    reducers: {
        updateForm: (state, action:PayloadAction<Partial<FormState>>) => {
            return {
                ...state,
                ...action.payload,
            };
        },
    },
});

export const { updateForm } = formSlice.actions;

export default formSlice.reducer;
