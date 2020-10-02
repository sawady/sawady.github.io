<style>
  button {
    display: inline-block;
    text-align: center;
    box-sizing: border-box;
    border-radius: .25rem;
    border: 1px solid transparent;
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

  nav {
    position: fixed;
    bottom: 0;
    padding: 10px 0 10px 0;
    background-color: #ffffff;
    height: 3rem;
    width: 100%;
    display: flex;
    left: 0;
    justify-content: center;
  }

  .fade-in {
    opacity: 1;
    animation-name: fadeInOpacity;
    animation-iteration-count: 1;
    animation-timing-function: ease-in;
    animation-duration: .2s;
  }

  .enabled {
    background-color: #c47e29;
  }

  .disabled {
    background-color: #cac0b4;
  }

  @keyframes fadeInOpacity {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  .container-spinner {
    position: absolute;
    top: -5px;
  }

  .mb-2 {
    margin-bottom: 2rem;
  }
</style>

<script>
  import { carrito } from "../../stores/Carrito.js";
  import Spinner from "../Spinner.svelte";

  export let nombre;
  export let handleClick;
  export let loading = false;
</script>

{#if $carrito.productos.size != 0}
  <section class="mb-2"><slot /></section>
  <nav>
    {#if loading}
      <div class="container-spinner"><Spinner /></div>
    {/if}
    <button class={`fade-in ${ loading ? 'disabled' : 'enabled' } `} on:click={handleClick} disabled={loading}>
      {nombre}
    </button>
  </nav>
  {:else}
  <slot />
{/if}