<script>
  import Icon from "svelte-awesome/components/Icon.svelte";
  import { plusCircle, minusCircle } from "svelte-awesome/icons";
  import { carrito } from "../../stores/Carrito.js";
  import { saveCarrito, getCarrito } from "../../service/Storage.js";
  export let producto;

  $: productoDeCarrito = $carrito.productosCotizados.get(producto.id);
  $: cantidad = productoDeCarrito ? productoDeCarrito.cantidad : 0;

  const actualizarCarrito = () => {
    const productosCotizados = $carrito.productosCotizados;
    if (productoDeCarrito.cantidad <= 0) {
      productosCotizados.delete(producto.id);
    } else {
      productosCotizados.set(producto.id, productoDeCarrito);
    }
    carrito.update(c => ({ ...c, productosCotizados: productosCotizados }));
    saveCarrito($carrito);
  }

  const addProduct = () => {
    if (!productoDeCarrito) {
      producto.cantidad = 0;
      productoDeCarrito = producto;
    }
    productoDeCarrito.cantidad++;
    actualizarCarrito();
  }

  const discountProduct = () => {
    if (productoDeCarrito) {
      productoDeCarrito.cantidad--;
      actualizarCarrito();
    }
  }
</script>

<style>
  .producto {
    margin: 10px 0;
    padding: 10px 0;
    border-bottom: 1px #c47e29 solid;
    display: flex;
  }

  .name {
    color: #0684b4;
    font-weight: bold;
  }

  button {
    margin-right: 8px;
    border: 0;
    background: none;
    color: #c47e29;
    padding: 10px;
  }

  img {
    width: 100px;
    height: 100px;
  }

  .descripcion {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    flex: 1;
  }

  .buttons {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
</style>

<div class="producto">
  <div>
    <img
      alt={producto.codigo}
      src="https://statics.dinoonline.com.ar/imagenes/full_600x600_ma/3080015_f.jpg" />
  </div>
  <div class="descripcion">
    <div>
      <div class="name">{producto.nombre}</div>
      <div>${producto.precio}</div>
    </div>
    <div class="buttons">
      <div>Cantidad: {cantidad}</div>
      <div>
        <button on:click={addProduct}>
          <Icon data={plusCircle} class="alert" scale={1.5} />
        </button>
        <button on:click={discountProduct}>
          <Icon data={minusCircle} class="alert" scale={1.5} />
        </button>
      </div>
    </div>
  </div>
</div>
