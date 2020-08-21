import { writable } from 'svelte/store';
import { getCarrito } from '../service/Storage.js';

const carritoProps = {
  confirmado: false,
  cliente: 'anonimo',
  distribuidora_id: 1,
  productos: new Map(),
}

const getCarritoBrowser = () => (typeof window !== 'undefined' && getCarrito()) || carritoProps;

export const carrito = writable(getCarritoBrowser());