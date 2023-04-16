export let SERVICE_ROUTES = {
  AUTH_SIGN_IN: 'auth/login',
  GET_USER_PROFILE: '/api/v1/profile',
  GET_ALL_PRODUCT: 'https://fakestoreapi.com/products',
  GET_PRODUCT_BY_ID: 'https://fakestoreapi.com/products/:id/',
  GET_ALL_CATEGORIES: 'https://fakestoreapi.com/products/categories',
  GET_PRODUCT_JEWELERY: 'https://fakestoreapi.com/products/category/',
};

export const METHODS = {
  GET: 'GET',
  POST: 'POST',
};

export const replaceUrl = (url, data) => {
  var regex = new RegExp(':(' + Object.keys(data).join('|') + ')', 'g');
  return url?.replace(regex, (m, $1) => data[$1] || m);
};
