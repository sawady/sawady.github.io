export const generarProductoDePedido = (producto) => {
  return {
    producto_id: producto.id,
    cantidad: producto.cantidad,
    precio_id: producto.precio.id
  };
}

export const generarItemsDeCarrito = (itemsMap) => Array.from(itemsMap.values()).map(p => generarProductoDePedido(p));