import {combineReducers} from 'redux';
import {registerReducer, photoReducer} from './authReducer';
import {globalReducer} from './globalReducer';
import {homeReducer} from './homeReducer';

const reducer = combineReducers({
  registerReducer,
  photoReducer,
  globalReducer,
  homeReducer,
});

export default reducer;
