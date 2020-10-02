import axios from 'axios';
import { getToken } from '../service/Storage.js';
import { handleError } from './HandlerError.js';

const API_URL = axios.create({
  baseURL: `http://localhost:8000/api/`,
})

const headers = () => ({ Authorization: `Bearer ${getToken()}` });

const apiRequest = async (method, url, data, params, config = {}) => {
  const res = await API_URL({
    method,
    url,
    params: params,
    data: data,
    headers: config,
  });
  return res.data;
}

API_URL.interceptors.response.use(undefined, error => {
  handleError(error.response);
});

const get = (url, params = {}) => apiRequest("get", url, {}, params);
const post = (url, data = {}) => apiRequest("post", url, data, {});

const postAuth = (url, data = {}) => apiRequest("post", url, data, {}, headers());


const API = {
  get,
  post,
  postAuth,
}

export default API;