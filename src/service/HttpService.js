import axios from 'axios';

const API_URL = axios.create({
  baseURL: `${process.env.API_BASE_URL}/api/`,
})

const apiRequest = (method, url, data) => {
  return API_URL({
    method,
    url,
    data: data
  })
  .then(res => res.data)
  .catch(err => console.log(err));
}

const get = (url, data = {}) => apiRequest("get", url, data);
const post = (url, data = {}) => apiRequest("post", url, data);

const API = {
  get,
  post,
}

export default API;