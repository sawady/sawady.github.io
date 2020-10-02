<script>
  import { carrito } from "../stores/Carrito.js";
  import Producto from "../components/productos/producto.svelte";
  import Alert from "../components/Alert.svelte";
  import BottomButtonNav from "../components/productos/BottomButtonNav.svelte";
  import { postPedido } from "../service/Pedidos.js";
  import { saveCarrito } from "../service/Storage.js";

  let pedidoRealizado = false;
  let loading = false;

  const realizarPedido = async () => {
    loading = true;
    await postPedido($carrito);
    carrito.update(c => ({...c, productos: new Map()}));
    saveCarrito($carrito);
    pedidoRealizado = true;
    loading = false;
  }

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

{#each [...$carrito.productos.values()] as producto}
  <Producto producto={producto} />
  {:else}
    {#if pedidoRealizado}
      <Alert className="success">
        El pedido se realizo correctamente, puede ver mas detalles en
        <a rel="prefetch" href="pedidos">Pedidos</a>.
      </Alert>
      {:else}
      <Alert>
        No hay ningun producto para confirmar, seleccione en
        <a rel="prefetch" href="productos">Productos</a>.
      </Alert>
    {/if}
{/each}

<BottomButtonNav loading={loading} nombre="confirmar pedido" handleClick={realizarPedido} />