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
</style>

<script context="module">
  import { getPedido } from "../../service/Pedidos";

  export async function preload(page, session) {
    const { id } = page.params;
    const pedido = await getPedido(id);
		return { pedido };
	}
</script>

<script>
  import Alert from "../../components/Alert.svelte";
  export let pedido;
</script>

<svelte:head>
  <title>Detalle Pedido</title>
</svelte:head>

{#if !pedido}
  <Alert>El pedido no existe.</Alert>
  {:else}
    {#each pedido.productos as producto }
      <div class="producto">
        <div>
          <img
            alt={producto.codigo}
            src="https://statics.dinoonline.com.ar/imagenes/full_600x600_ma/3080015_f.jpg" />
        </div>
        <div class="descripcion">
          <div>
            <div class="name">{producto.nombre}</div>
            <div>${producto.precio.valor}</div>
          </div>
          <div>Cantidad: {producto.pivot.cantidad}</div>
        </div>
      </div>
    {/each}
{/if}