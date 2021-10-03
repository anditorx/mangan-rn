import * as ActionTypes from '../actionTypes.js';
// register
const initialHome = {
  food: [],
  newTaste: [],
  popular: [],
  recommended: [],
};

export const homeReducer = (state = initialHome, action) => {
  if (action.type === ActionTypes.SET_FOOD) {
    return {
      ...state,
      food: action.value,
    };
  }
  if (action.type === ActionTypes.SET_NEW_TASTE) {
    return {
      ...state,
      newTaste: action.value,
    };
  }
  if (action.type === ActionTypes.SET_POPULAR) {
    return {
      ...state,
      popular: action.value,
    };
  }
  if (action.type === ActionTypes.SET_RECOMMENDED) {
    return {
      ...state,
      recommended: action.value,
    };
  }

  return state;
};
