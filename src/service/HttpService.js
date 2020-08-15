import axios from 'axios';

const API_URL = axios.create({
  baseURL: `http://localhost:8000/api/`,
})

const apiRequest = (method, url, data, params) => {
  return API_URL({
    method,
    url,
    params: params,
    data: data
  })
  .then(res => res.data)
  .catch(err => console.log(err));
}

const get = (url, params = {}) => apiRequest("get", url, {}, params);
const post = (url, data = {}) => apiRequest("post", url, data, {});

const API = {
  get,
  post,
}

export default API;