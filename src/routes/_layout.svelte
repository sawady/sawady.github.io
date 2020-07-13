<script>
  import Nav from "../components/Nav.svelte";
  import { user } from "../stores/user.js";

  export let segment;
</script>

<style>
  main {
    position: relative;
    max-width: 40em;
    background-color: white;
    padding: 2em;
    margin: 0 auto;
    box-sizing: border-box;
  }
</style>

{#if $user}
  <Nav {segment} />
{/if}

<main>
  <slot />
</main>
