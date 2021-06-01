import store from './store';


store.dispatch({
    type: 'AddDigitToNum1',
    payload: {
        digit : '2'
    }
});

store.dispatch({
    type: 'AddDigitToNum1',
    payload: {
        digit : '3'
    }
});

console.log(store.getState());