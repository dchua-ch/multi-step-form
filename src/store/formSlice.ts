import { createSlice,PayloadAction } from "@reduxjs/toolkit";

interface FormState {
    // Each field is optional to make it easier to update form in our reducer
    // i.e. to facilitate return {...state, ...action.payload}
    // There is probably a better way to do this
    name?: string;
    emailAddress?: string;
    phoneNumber?: string;
    plan?: string;
    billingFrequency?: string;
    addOns?: string[];
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
        updateForm: (state, action:PayloadAction<FormState>) => {
            return {
                ...state,
                ...action.payload,
            };
        },
    },
});

export const { updateForm } = formSlice.actions;

export default formSlice.reducer;
