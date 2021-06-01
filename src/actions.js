import {ADD_DIGIT_TO_NUM_1} from './actionTypes';

export const AddDigitToNum1 = digit => ({
    type: ADD_DIGIT_TO_NUM_1,
    payload: {
        digit
    }
});
/*
export function AddDigitToNum1(digit) {
    return {
        type: ADD_DIGIT_TO_NUM_1,
        payload: {
            digit
        }
    }
}
*/