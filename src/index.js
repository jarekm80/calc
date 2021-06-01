import store from './store';
import {AddDigitToNum1} from './actions';
const unsubscribe = store.subscribe(() => {
    console.log('Store changed', store.getState());
});

store.dispatch(AddDigitToNum1('7'));
store.dispatch(AddDigitToNum1('6'));

/*
store.dispatch({
    type: ADD_DIGIT_TO_NUM_1,
    payload: {
        digit : '2'
    }
});

unsubscribe();

store.dispatch({
    type: 'AddDigitToNum1',
    payload: {
        digit : '3'
    }
});
*/
//console.log(store.getState());