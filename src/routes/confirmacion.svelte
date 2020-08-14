<script>
  import { carrito } from "../stores/Carrito.js";
  import Producto from "../components/productos/producto.svelte";
</script>

<style>
  h1 {
    text-align: center;
  }
</style>

<svelte:head>
  <title>Confirmacion</title>
</svelte:head>

<h1>Confirmacion de Perdido</h1>

{#each [...$carrito.productosCotizados.values()] as producto}
  <Producto producto={producto} />
{/each}