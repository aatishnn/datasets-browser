import {combineReducers} from 'redux'
import filterReducer from './filterReducer';
import authReducer from './authReducer';

const rootReducer = combineReducers({
  'filter': filterReducer,
  'auth': authReducer
})

export default rootReducer;