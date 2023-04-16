import Axios from 'axios';
import {METHODS, SERVICE_ROUTES} from '../constant';
// Google SignIn
export const signInService = data => {
  return new Promise((resolve, reject) => {
    debugger;
    let config = {
      url: SERVICE_ROUTES.AUTH_SIGN_IN,
      method: METHODS.POST,
      data,
    };

    Axios.request(config)
      .then(res => {
        resolve(res);
      })
      .catch(err => {
        reject(err);
      });
  });
};

export const getUserProfileService = () => {
  return new Promise((resolve, reject) => {
    let config = {
      url: SERVICE_ROUTES.GET_USER_PROFILE,
      method: METHODS.GET,
    };
    Axios.request(config)
      .then(res => {
        resolve(res);
      })
      .catch(err => {
        reject(err);
      });
  });
};
