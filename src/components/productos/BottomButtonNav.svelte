<style>
  button {
    display: inline-block;
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

  @keyframes fadeInOpacity {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
</style>

<script>
  import { carrito } from "../../stores/Carrito.js";
  export let nombre;
  export let handleClick;
</script>

{#if $carrito.productos.size != 0}
  <nav>
    <button class="fade-in" on:click={handleClick}>
      {nombre}
    </button>
  </nav>
{/if}