import API from './HttpService.js';

const url = 'productos';

export const getProductos = (query) => {
  return API.get(url, query);
}
