import * as ActionTypes from '../../redux/actionTypes';

export const setLoading = value => {
  return {type: ActionTypes.SET_LOADING, value};
};
