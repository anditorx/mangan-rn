import {combineReducers} from 'redux';
import {registerReducer, photoReducer} from './authReducer';
import {globalReducer} from './globalReducer';

const reducer = combineReducers({
  registerReducer,
  photoReducer,
  globalReducer,
});

export default reducer;
