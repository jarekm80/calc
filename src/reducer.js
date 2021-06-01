export default function reducer(state,action){
    switch (action.type){
        case 'AddDigitToNum1':
            {
                state.num1 += action.payload.digit;
            }    
        default :
            return state;    
    }
}