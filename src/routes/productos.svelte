<style>
  h1 {
    text-align: center;
  }
  .center {
    display: flex;
    justify-content: center;
  }

  input {
    box-sizing: border-box;
    background-color: #eee;
    border-radius: 4px;
    border: none;
    padding: 12px 15px;
    margin: 8px 0 12px;
    width: 100%;
    max-width: 300px;
  }

  form {
    padding-bottom: 15px;
    margin: 0 auto;
    flex-direction: column;
    display: flex;
    max-width: 300px;
  }

  button {
    display: inline-block;
    margin: 0 auto;
    text-align: center;
    box-sizing: border-box;
    border-radius: .25rem;
    border: 1px solid transparent;
    background-color: #c47e29;
    color: #ffffff;
    font-size: 12px;
    font-weight: 400;
    padding: 10px 35px;
    letter-spacing: 1px;
    text-transform: uppercase;
    transition: 80ms ease-in;
  }

  button:active {
    background-color: #9e6a2a;
  }

  .container {
    margin-top: 10px;
  }

</style>

<script>
  import Producto from "../components/productos/producto.svelte";
  import { getProductos } from '../service/Productos.js';
  import { productos } from '../stores/productos.js';
  import Icon from "svelte-awesome/components/Icon.svelte";
  import Spinner from "../components/Spinner.svelte";
  import { close } from "svelte-awesome/icons";
  import Chip from "../components/Chip.svelte";
  import Alert from "../components/Alert.svelte";

  const query = {};
  let nombreDeBusqueda = '';

  const getProductosResponse = async () => {
    const nuevos_productos = await getProductos();
    productos.update(_ => nuevos_productos);
    return nuevos_productos;
  }

  let productosParaRender = $productos || getProductosResponse();

  const handleSubmit = (e) => {
    e.preventDefault();
    productosParaRender = getProductos(query);
    nombreDeBusqueda = query.nombre;
    e.target.reset();
  }

  const resetBusqueda = () => {
    nombreDeBusqueda = '';
    query.nombre = '';
    productosParaRender = $productos;
  }

</script>

<svelte:head>
  <title>Productos</title>
</svelte:head>

<h1>Selecciona productos</h1>

<form on:submit={handleSubmit}>
  <input required type="text" bind:value={query.nombre} placeholder="Nombre de un producto">
  <button type="submit">
    buscar
  </button>
</form>
{#if nombreDeBusqueda}
  <div class="container">
    Busqueda:
    <Chip nombre={nombreDeBusqueda} handleClose={resetBusqueda} />
  </div>
{/if}

{#await productosParaRender}
  <div class="center">
    <Spinner />
  </div>
{:then p}
  {#each p.items as producto}
    <Producto producto={producto} />
    {:else}
    <Alert>
      No hay productos disponibles.
    </Alert>
  {/each}
{/await}

