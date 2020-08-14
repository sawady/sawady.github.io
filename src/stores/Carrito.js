import { writable } from 'svelte/store';
import { getCarrito } from '../service/Storage';

const carritoProps = {
  confirmada: false,
  productosCotizados: new Map(),
}

const getCarritoBrowser = () => (typeof window !== 'undefined' && getCarrito()) || carritoProps;

export const carrito = writable(getCarritoBrowser());