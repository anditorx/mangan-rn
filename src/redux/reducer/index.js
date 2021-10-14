import {combineReducers} from 'redux';
import {registerReducer, photoReducer} from './authReducer';
import {globalReducer} from './globalReducer';
import {homeReducer} from './homeReducer';
import {orderReducer} from './orderReducer';

const reducer = combineReducers({
  registerReducer,
  photoReducer,
  globalReducer,
  homeReducer,
  orderReducer,
});

export default reducer;
