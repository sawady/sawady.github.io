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

  .mt-10 {
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
  import BottomButtonNav from "../components/productos/BottomButtonNav.svelte";
  import { goto } from '@sapper/app';
  import { onMount } from "svelte";
  import InfiniteScroll from "../components/InfiniteScroll.svelte";

  let filtro = {
    count: 10,
    nombre: '',
  }
  let paginacion = {
    page: 1,
    last_page: 1,
  }
  let nombreChip = '';
  let cntTotalData = 0;
  $: data = [];
  let loading = true;

  onMount(async () => {
    if (!$productos) {
      await setProductos();
      productos.update(_ => ({ ...paginacion, page: 1, items: data }));
    } else {
      set_data($productos);
    }
    loading = false;
  });

  const set_data = (newData) => {
    if (newData.page === 1) {
      cntTotalData = newData.items.length;
      data = newData.items;
    } else {
      cntTotalData += newData.items.length;
      data = [...data, ...newData.items];
    }
    paginacion = { page: newData.page + 1, last_page: newData.last_page };
  }

  const setProductos = async (queryParams = { ...filtro, ...paginacion }) => {
    set_data(await getProductos(queryParams));
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    loading = true;
    await setProductos(filtro);
    loading = false;
    nombreChip = filtro.nombre;
    e.target.reset();
  }

  const resetBusqueda = () => {
    nombreChip = '';
    filtro.nombre = '';
    set_data($productos);
  }

  const handleClick = () => {
    goto('confirmacion');
  }

  const esLaUltimaPagina = () => paginacion.page - 1 === paginacion.last_page;
</script>

<svelte:head>
  <title>Productos</title>
</svelte:head>

<h1>Selecciona productos</h1>
<form on:submit={handleSubmit}>
  <input required type="text" bind:value={filtro.nombre} placeholder="Nombre de un producto">
  <button type="submit">
    buscar
  </button>
</form>

{#if nombreChip}
  <div class="mt-10">
    Busqueda:
    <Chip nombre={nombreChip} handleClose={resetBusqueda} />
  </div>
{/if}

<BottomButtonNav nombre="ver pedido" handleClick={handleClick}>
  {#if loading}
    <div class="center">
      <Spinner />
    </div>
    {:else}
      {#each data as producto, i}
        <Producto producto={producto} />
        {#if cntTotalData === i + 1}
          <InfiniteScroll hasMore={!esLaUltimaPagina()} handleScroll={() => setProductos()} />
        {/if}
      {/each}
  {/if}

  {#if !(loading || cntTotalData)}
    <Alert>
      No hay productos disponibles.
    </Alert>
  {/if}
</BottomButtonNav>