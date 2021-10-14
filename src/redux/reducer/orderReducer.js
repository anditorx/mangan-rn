import * as ActionTypes from '../actionTypes.js';

// register
const initialOrderState = {
  orders: [],
  inProgress: [],
  pastOrders: [],
};

export const orderReducer = (state = initialOrderState, action) => {
  if (action.type === ActionTypes.SET_ORDER) {
    return {
      ...state,
      orders: action.value,
    };
  }
  if (action.type === ActionTypes.SET_ORDER_IN_PROGRESS) {
    return {
      ...state,
      inProgress: action.value,
    };
  }
  if (action.type === ActionTypes.SET_ORDER_PAST_ORDERS) {
    return {
      ...state,
      pastOrders: action.value,
    };
  }

  return state;
};
