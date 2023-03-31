import Axios from 'axios';
import {CircularIndeterminate} from '../../pages/Home';
import {
  METHODS,
  SERVICE_ROUTES,
  replaceUrl,
} from '../constant/services.constant';

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

export function GetProductByIdService(payload) {
  const {id} = payload;
  return new Promise((resolve, reject) => {
    let config = {
      url: replaceUrl(SERVICE_ROUTES.GET_PRODUCT_BY_ID, {id}),
      method: METHODS.GET,
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

export function GetAllCategoriesService(payload) {
  return new Promise((resolve, reject) => {
    let config = {
      url: SERVICE_ROUTES.GET_ALL_CATEGORIES,
      method: METHODS.GET,
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

export function GetProductByCategoryService(payload) {
  // const {data} =payload
  console.log('data', payload);
  // c
  return new Promise((resolve, reject) => {
    let config = {
      url: `https://fakestoreapi.com/products/category/${payload}`,
      method: METHODS.GET,
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
