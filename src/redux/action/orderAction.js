import Axios from 'axios';
import * as Constants from '../../config/Constant.js';
import * as Services from '../../config/Services';
import {showMessage, hideMessage} from 'react-native-flash-message';
import {setLoading} from './globalAction';
import {useForm, showToast, storeData, getData} from '../../utils';
import * as ActionTypes from '../actionTypes.js';

export const getOrders = () => dispatch => {
  const urlService = Constants.BASE_URL + Services.transaction;
  getData('@token').then(resToken => {
    console.log('resToken :=> ', resToken);
    Axios.get(urlService, {
      headers: {
        Authorization: resToken.value,
      },
    })
      .then(res => {
        console.log('res getOrders :=> ', res.data);
        dispatch({type: ActionTypes.SET_ORDER, value: res.data.data.data});
      })
      .catch(err => {
        console.log('error getOrders :=> ', err);
      });
  });
};

export const getInProgress = () => dispatch => {
  const urlServicePENDING =
    Constants.BASE_URL + Services.transaction + '?status=PENDING';
  const urlServiceSUCCESS =
    Constants.BASE_URL + Services.transaction + '?status=SUCCESS';
  const urlServiceON_DELIVERY =
    Constants.BASE_URL + Services.transaction + '?status=ON_DELIVERY';
  getData('@token').then(resToken => {
    console.log('resToken :=> ', resToken);
    Axios.all([
      Axios.get(urlServicePENDING, {
        headers: {
          Authorization: resToken.value,
        },
      }),
      Axios.get(urlServiceSUCCESS, {
        headers: {
          Authorization: resToken.value,
        },
      }),
      Axios.get(urlServiceON_DELIVERY, {
        headers: {
          Authorization: resToken.value,
        },
      }),
    ])

      .then(
        Axios.spread((res1, res2, res3) => {
          const resPending = res1.data.data.data;
          const resSuccess = res2.data.data.data;
          const resOnDelivery = res3.data.data.data;

          dispatch({
            type: ActionTypes.SET_ORDER_IN_PROGRESS,
            value: [...resPending, ...resSuccess, ...resOnDelivery],
          });
        }),
      )
      .catch(err => {
        console.log('error getInProgress :=> ', err);
      });
  });
};
export const getPastOrders = () => dispatch => {
  const urlServiceCANCELLED =
    Constants.BASE_URL + Services.transaction + '?status=CANCELLED';
  const urlServiceDELIVERED =
    Constants.BASE_URL + Services.transaction + '?status=DELIVERED';

  getData('@token').then(resToken => {
    Axios.all([
      Axios.get(urlServiceCANCELLED, {
        headers: {
          Authorization: resToken.value,
        },
      }),
      Axios.get(urlServiceDELIVERED, {
        headers: {
          Authorization: resToken.value,
        },
      }),
    ])
      .then(
        Axios.spread((res1, res2) => {
          const resCanceled = res1.data.data.data;
          const resDelivered = res2.data.data.data;

          dispatch({
            type: ActionTypes.SET_ORDER_PAST_ORDERS,
            value: [...resCanceled, ...resDelivered],
          });
        }),
      )
      .catch(err => {
        console.log('error getPastOrders :=> ', err);
      });
  });
};
