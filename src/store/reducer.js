import {combineReducers} from 'redux';
import numsReducer from './nums';

export default combineReducers({
    nums : numsReducer,
});