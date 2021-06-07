import configureStore from './store/configureStore';
import {AddDigitToNum1, AddDigitToNum2, NumsAdd, NumsMultiply, NumsSubstraction, NumsDivision} from './store/nums';

const store = configureStore();

const unsubscribe = store.subscribe(() => {
    console.log('Store changed', store.getState());
});

store.dispatch(AddDigitToNum1({digit : '7'}));
store.dispatch(AddDigitToNum1({digit : '6'}));

store.dispatch(AddDigitToNum2({digit : '3'}));

store.dispatch(NumsDivision());
