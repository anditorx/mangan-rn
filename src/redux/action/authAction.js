import Axios from 'axios';
import * as Constants from '../../config/Constant.js';
import * as Services from '../../config/Services';
import {showMessage, hideMessage} from 'react-native-flash-message';
import {setLoading} from './globalAction';
import {useForm, showToast, storeData} from '../../utils';

export const signUpAction =
  (dataRegister, photoReducer, navigation) => dispatch => {
    dispatch(setLoading(true));
    const urlService = Constants.BASE_URL + Services.register;

    Axios.post(urlService, dataRegister)
      .then(res => {
        const resDataUser = res.data.data.user;
        const resToken = `${res.data.data.token_type} ${res.data.data.access_token}`;

        // store data token
        storeData('@token', {
          value: resToken,
        });
        if (photoReducer.isUploadPhoto) {
          const serviceAddAva =
            Constants.BASE_URL + Services.uploadPhotoProfile;
          const photoForUpload = new FormData();
          photoForUpload.append('file', photoReducer);
          const options = {
            headers: {
              Authorization: resToken,
              'Content-Type': 'multipart/form-data',
            },
          };

          Axios.post(serviceAddAva, photoForUpload, options)
            .then(resUpload => {
              resDataUser.profile_photo_url = `http://foodmarket-backend.buildwithangga.id/storage/${resUpload.data.data[0]}`;
              // store data user
              storeData('@userData', resDataUser);
              navigation.reset({index: 0, routes: [{name: 'SignUpSuccess'}]});
            })
            .catch(errUpload => {
              showToast('Ups!', errUpload?.response?.data?.message, 'danger');
              navigation.reset({index: 0, routes: [{name: 'SignUpSuccess'}]});
            });
        } else {
          storeData('@userData', resDataUser);
          navigation.reset({index: 0, routes: [{name: 'SignUpSuccess'}]});
        }

        dispatch(setLoading(false));
      })
      .catch(error => {
        dispatch(setLoading(false));
        showToast('Ups!', error?.response?.data?.message, 'danger');
      });
  };
export const signInAction = (form, navigation) => dispatch => {
  dispatch(setLoading(true));
  const urlService = Constants.BASE_URL + Services.login;
  Axios.post(urlService, form)
    .then(res => {
      dispatch(setLoading(false));
      const resToken = `${res.data.data.token_type} ${res.data.data.access_token}`;
      const resDataUser = res.data.data.user;
      // store data token
      storeData('@token', {
        value: resToken,
      });
      // store data user
      storeData('@userData', resDataUser);
      navigation.reset({index: 0, routes: [{name: 'MainApp'}]});
    })
    .catch(err => {
      showToast('Ups!', err?.response?.data?.message, 'danger');
      dispatch(setLoading(false));
    });
};
