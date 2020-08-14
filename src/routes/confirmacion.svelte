<script>
  import { carrito } from "../stores/Carrito.js";
  import Producto from "../components/productos/producto.svelte";
</script>

<style>
  h1 {
    text-align: center;
  }
  .alert {
    background-color: #fff3cd;
    color: #856404;
    padding: .75rem 1.25rem;
    border: 1px solid #ffeeba;
    border-radius: .25rem;
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
  {:else}
  <div class="alert">No hay ningun producto para confirmar, seleccione en
    <a rel="prefetch" href="productos">Productos</a>.
  </div>
{/each}