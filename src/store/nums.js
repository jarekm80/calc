//ACTION TYPES
const ADD_DIGIT_TO_NUM_1 = 'AddDigitToNum1';
const ADD_DIGIT_TO_NUM_2 = 'AddDigitToNum2';

//ACTION CREATORS
export const AddDigitToNum1 = digit => ({
    type: ADD_DIGIT_TO_NUM_1,
    payload: {
        digit
    }
});

export const AddDigitToNum2 = digit => ({
    type: ADD_DIGIT_TO_NUM_2,
    payload: {
        digit
    }
});


//REDUCER
export default function reducer(state,action){
    switch (action.type){
        case ADD_DIGIT_TO_NUM_1:
            return {
                ...state, 
                num1: state.num1 + action.payload.digit
            }    
        case ADD_DIGIT_TO_NUM_2:
            return {
                ...state, 
                num2: state.num2 + action.payload.digit
            }    
        default :
            return state;    
    }
}
