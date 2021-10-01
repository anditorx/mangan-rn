import Axios from 'axios';
import * as Constants from '../../config/Constant.js';
import * as Services from '../../config/Services';
import {showMessage, hideMessage} from 'react-native-flash-message';
import {setLoading} from './globalAction';
import {useForm, showToast, storeData} from '../../utils';

export const signUpAction =
  (dataRegister, photoReducer, navigation) => dispatch => {
    const urlService = Constants.BASE_URL + Services.register;
    console.log('urlService :=> ', urlService);

    Axios.post(urlService, dataRegister)
      .then(res => {
        const resDataUser = res.data.data.user;
        const resToken = `${res.data.data.token_type} ${res.data.data.access_token}`;
        // store data user
        storeData('@userData', resDataUser);
        // store data token
        storeData('@token', {
          value: resToken,
        });
        if (photoReducer.isUploadPhoto) {
          const serviceAddAva =
            Constants.BASE_URL + Services.uploadPhotoProfile;
          console.log(serviceAddAva);
          const photoForUpload = new FormData();
          photoForUpload.append('file', photoReducer);
          const options = {
            headers: {
              Authorization: resToken,
              'Content-Type': 'multipart/form-data',
            },
          };

          Axios.post(serviceAddAva, photoForUpload, options).catch(
            errUpload => {
              console.log(errUpload);
              showToast('Ups!', errUpload?.response?.data?.message, 'danger');
            },
          );
        }

        dispatch(setLoading(false));
        navigation.replace('SignUpSuccess');
      })
      .catch(error => {
        dispatch(setLoading(false));
        showToast('Ups!', error?.response?.data?.message, 'danger');
      });
  };
