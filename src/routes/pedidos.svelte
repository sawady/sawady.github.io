<style>
  h1 {
    text-align: center;
  }

  .center {
    display: flex;
    justify-content: center;
  }
</style>

<script>
  import { onMount } from "svelte";
  import { user } from "../stores/user.js";
  import { getUser } from "../service/Usuarios.js";
  import Snipper from "../components/Spinner.svelte";
  import Pedido from "../components/Pedido.svelte";
  import Alert from "../components/Alert.svelte";
</script>

<svelte:head>
  <title>Pedidos</title>
</svelte:head>

<h1>Tus pedidos</h1>

{#await getUser($user.id)}
  <div class="center"><Snipper /></div>
{:then user}
  {#each user.pedidos as pedido}
    <Pedido pedido={pedido} />
    {:else}
    <Alert>
      No hay pedidos realizados aún.
    </Alert>
  {/each}
{/await}