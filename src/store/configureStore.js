import {createStore} from 'redux';
import reducer from './nums';
import initialState from './initialState';


export default function configureStore(){
    const store = createStore(reducer, initialState, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
    return store;
}