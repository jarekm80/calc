import {createStore} from 'redux';
import reducer from './reducer';

const initialState = {num1 : '' };

const store = createStore(reducer, initialState );

export default store;