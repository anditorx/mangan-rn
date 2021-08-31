import * as ActionTypes from '../actionTypes.js';

const initialState = {
  isError: false,
  message: 'Error',
  isLoading: false,
};

export const globalReducer = (state = initialState, action) => {
  if (action.type === ActionTypes.SET_ERROR) {
    return {
      ...state,
      isError: action.value.isError,
      message: action.value.message,
    };
  }
  if (action.type === ActionTypes.SET_LOADING) {
    return {
      ...state,
      isLoading: action.value,
    };
  }
  return state;
};
