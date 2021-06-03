import configureStore from './store/configureStore';
import {AddDigitToNum1, AddDigitToNum2} from './store/nums';

const store = configureStore();

const unsubscribe = store.subscribe(() => {
    console.log('Store changed', store.getState());
});

store.dispatch(AddDigitToNum1('7'));
store.dispatch(AddDigitToNum1('6'));

store.dispatch(AddDigitToNum2('3'));
