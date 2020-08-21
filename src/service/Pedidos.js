import API from './HttpService.js';
import { generarItemsDeCarrito } from '../Utils/Generador.js';

const url = 'pedidos';

export const postPedido = (carrito) => {
  const body = { ...carrito, productos: generarItemsDeCarrito(carrito.productos)};
  return API.post(url, body);
}

export const getPedido = (id) => {
  return API.get(`${url}/${id}`);
}
