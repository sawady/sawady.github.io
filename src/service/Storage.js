const get = (key) => {
  try {
    return JSON.parse(window.localStorage.getItem(key))
  } catch (_) {
    return undefined;
  }
}

const set = (key, value) => {
  window.localStorage.setItem(key, JSON.stringify(value));
}

const convertMapToString = (map) => JSON.stringify(Array.from(map.entries()));
const convertStringMap = (stringMap) => new Map(JSON.parse(stringMap));


export const getCarrito = () => {
  const carrito = get('carrito');
  carrito && (carrito.productosCotizados = convertStringMap(carrito.productosCotizados));
  return carrito;
};

export const saveCarrito = (carrito) => {
  set('carrito', {
    ...carrito,
    productosCotizados: convertMapToString(carrito.productosCotizados),
  });
};
