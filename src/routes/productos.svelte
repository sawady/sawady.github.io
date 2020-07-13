<script context="module">
  // export function preload({ params, query }) {
  //   return {};
  // }
</script>

<script>
  import { productos } from "../stores/productos.js";
  import Producto from "../components/productos/producto.svelte";
</script>

<style>
  h1 {
    text-align: center;
  }
</style>

<svelte:head>
  <title>Productos</title>
</svelte:head>

<h1>Selecciona productos</h1>

{#each $productos.items as producto}
  <!-- we're using the non-standard `rel=prefetch` attribute to
      tell Sapper to load the data for the page as soon as
      the user hovers over the link or taps it, instead of
      waiting for the 'click' event -->
  <!-- <li><a rel='prefetch' href='productos/{producto.slug}'>{producto.title}</a></li> -->
  <Producto producto={producto} />
{/each}
