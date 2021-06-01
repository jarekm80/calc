import {ADD_DIGIT_TO_NUM_1} from './actionTypes';

export default function reducer(state,action){
    switch (action.type){
        case ADD_DIGIT_TO_NUM_1:
            {
                state.num1 += action.payload.digit;
            }    
        default :
            return state;    
    }
}