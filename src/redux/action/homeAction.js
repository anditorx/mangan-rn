import Axios from 'axios';
import * as Constants from '../../config/Constant';
import * as Services from '../../config/Services';
import {showMessage, hideMessage} from 'react-native-flash-message';
import {setLoading} from './globalAction';
import {useForm, showToast, storeData} from '../../utils';
import * as ActionTypes from '../actionTypes.js';

export const getFoodData = (form, navigation) => dispatch => {
  dispatch(setLoading(true));
  const urlService = Constants.BASE_URL + Services.getFood;
  Axios.get(urlService)
    .then(res => {
      dispatch(setLoading(false));
      dispatch({type: ActionTypes.SET_FOOD, value: res.data.data.data});
    })
    .catch(err => {
      showToast('Ups!', err?.response?.data?.message, 'danger');
      dispatch(setLoading(false));
    });
};
export const getFoodDataByTypes = types => dispatch => {
  dispatch(setLoading(true));
  const urlService = Constants.BASE_URL + Services.getFoodByTypes + `${types}`;
  Axios.get(urlService)
    .then(res => {
      dispatch(setLoading(false));
      console.log('res getFoodDataByTypes :=> ', res);
      if (types === 'new_food') {
        dispatch({type: ActionTypes.SET_NEW_TASTE, value: res.data.data.data});
      }
      if (types === 'popular') {
        dispatch({type: ActionTypes.SET_POPULAR, value: res.data.data.data});
      }
      if (types === 'recommended') {
        dispatch({
          type: ActionTypes.SET_RECOMMENDED,
          value: res.data.data.data,
        });
      }
    })
    .catch(err => {
      showToast('Ups!', err?.response?.data?.message, 'danger');
      dispatch(setLoading(false));
    });
};
