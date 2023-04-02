import Axios from 'axios';
import {METHODS, SERVICE_ROUTES} from '../constant/services.constant';

export function GetProductListService(params) {
  return new Promise((resolve, reject) => {
    let config = {
      url: SERVICE_ROUTES.GET_ALL_PRODUCT,
      method: METHODS.GET,
      params,
    };
    Axios.request(config)
      .then(response => {
        return resolve(response);
      })
      .catch(error => {
        return reject(error);
      });
  });
}
