import { createSlice} from '@reduxjs/toolkit';
import initialState from './initialState';

const slice = createSlice({
    name: 'nums',
    initialState,
    reducers: {
        AddDigitToNum1 : (state, action) => {
            state.num1 = state.num1 + action.payload.digit
        },
        AddDigitToNum2 : (state, action) => {
            state.num2 = state.num2 + action.payload.digit
        },
        NumsAdd : (state) => {
            state.result = (parseInt(state.num1) + parseInt(state.num2)).toString();
        },    
        NumsMultiply : (state) => {
            state.result = (parseInt(state.num1) * parseInt(state.num2)).toString();
        },    
        NumsSubstraction : (state) => {
            state.result = (parseInt(state.num1) - parseInt(state.num2)).toString();
        },    
        NumsDivision : (state) => {
            state.result = Math.round((parseInt(state.num1) / parseInt(state.num2))).toString();
        },    
    }
});

export default slice.reducer;
export const {AddDigitToNum1, AddDigitToNum2, NumsAdd, NumsMultiply, NumsSubstraction, NumsDivision} = slice.actions; 
