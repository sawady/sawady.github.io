import API from './HttpService.js';
import { carrito } from "../stores/Carrito.js";
import { user } from "../stores/user.js";
import { saveToken, clearStorage } from './Storage.js';

const url = 'auth';

export const login = async (query) => {
  const { access_token } = await API.post(`${url}/login`, query);
  saveToken(access_token);
};

export const me = async () => {
  const _user = await API.postAuth(`${url}/me`);
  user.update(() => _user);
  carrito.update(carrito => ({ ...carrito, user_id: _user.id }));
}

export const logout = async () => {
  await API.postAuth(`${url}/logout`);
  user.set(null);
  clearStorage();
}


