<script>
  import { carrito } from "../stores/Carrito.js";
  import Producto from "../components/productos/producto.svelte";
  import Alert from "../components/Alert.svelte";
  import BottomButtonNav from "../components/productos/BottomButtonNav.svelte";
</script>

<style>
  h1 {
    text-align: center;
  }
  a {
    text-decoration: none;
    color: blue;
  }
</style>

<svelte:head>
  <title>Confirmacion</title>
</svelte:head>

<h1>Confirmacion de Perdido</h1>

{#each [...$carrito.productosCotizados.values()] as producto}
  <Producto producto={producto} />
  <BottomButtonNav nombre="confirmar pedido" handleClick={() => null} />
  {:else}
  <Alert>
    No hay ningun producto para confirmar, seleccione en
    <a rel="prefetch" href="productos">Productos</a>.
  </Alert>
{/each}