import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../app/store";
import { sessionState } from "../interfaces/sessionInterface";


const initialState: sessionState = {
    value: ''
}

export const sessionSlice = createSlice({
    name: 'sessuib',
    initialState,
    reducers:{
        setSession: (state, action: PayloadAction<string>) =>{
            state.value = action.payload
        }
    }
})
export const { setSession } = sessionSlice.actions;


export const selectSession = (state: RootState) => state.session.value;


export default sessionSlice.reducer;