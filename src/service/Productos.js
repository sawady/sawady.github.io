import API from './HttpService.js';

const url = 'productos';

export const getProductos = (nombre = '') => {
  return API.get(`${url}?nombre=${nombre}`);
}
