import * as ActionTypes from '../actionTypes.js';

// register
const initialRegisterState = {
  name: '',
  email: '',
  password: '',
  password_confirmation: '',
};

export const registerReducer = (state = initialRegisterState, action) => {
  if (action.type === ActionTypes.SET_REGISTER) {
    return {
      ...state,
      name: action.value.name,
      email: action.value.email,
      password: action.value.password,
      password_confirmation: action.value.password,
    };
  }

  return state;
};

// photo
const initialPhotoState = {
  uri: '',
  type: '',
  name: '',
  isUploadPhoto: false,
};

export const photoReducer = (state = initialPhotoState, action) => {
  if (action.type === ActionTypes.SET_PHOTO) {
    return {
      ...state,
      uri: action.value.uri,
      type: action.value.type,
      name: action.value.name,
    };
  }
  if (action.type === ActionTypes.SET_UPLOAD_STATUS) {
    return {
      ...state,
      isUploadPhoto: action.value,
    };
  }
  return state;
};
