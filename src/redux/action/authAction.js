import Axios from 'axios';
import * as Constants from '../../config/Constant.js';
import * as Services from '../../config/Services';
import {showMessage, hideMessage} from 'react-native-flash-message';
import {setLoading} from './globalAction';
import {useForm, showToast} from '../../utils';

export const signUpAction =
  (dataRegister, photoReducer, navigation) => dispatch => {
    const urlService = Constants.BASE_URL + Services.register;
    console.log('urlService :=> ', urlService);

    Axios.post(urlService, dataRegister)
      .then(res => {
        console.log('success register :=> ', res.data);

        if (photoReducer.isUploadPhoto) {
          const serviceAddAva =
            Constants.BASE_URL + Services.uploadPhotoProfile;
          console.log(serviceAddAva);
          const photoForUpload = new FormData();
          photoForUpload.append('file', photoReducer);
          const options = {
            headers: {
              Authorization: `${res.data.data.token_type} ${res.data.data.access_token}`,
              'Content-Type': 'multipart/form-data',
            },
          };

          Axios.post(serviceAddAva, photoForUpload, options)
            .then(resUpload => {
              console.log(resUpload);
            })
            .catch(errUpload => {
              console.log(errUpload);
              showToast('Ups!', errUpload?.response?.data?.message, 'danger');
            });
        }

        dispatch(setLoading(false));
        showToast('Register Success', 'Welcome to Mangan!', 'success');
        navigation.replace('SignUpSuccess');
      })
      .catch(error => {
        console.log('error register :=> ', error);
        dispatch(setLoading(false));
        showToast('Ups!', error?.response?.data?.message, 'danger');
      });
  };
