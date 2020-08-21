import API from './HttpService.js';

const url = 'usuarios';

export const getUsuarios = (query) => {
  return API.get(url, query);
}

export const getUser = (id) => {
  return API.get(`${url}/${id}`);
}
