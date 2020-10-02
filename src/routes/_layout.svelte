<script>
  import Nav from "../components/Nav.svelte";
  import { user } from "../stores/user.js";
  import LoginForm from "../components/LoginForm.svelte";
  import { onMount } from "svelte";
  import { getToken } from "../service/Storage";
  import { me } from "../service/Auth";

  export let segment;
  let loading = true;

  onMount(async () => {
    loading = true;
    if (getToken()) {
      await me();
    }
    loading = false;
  });
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

  figure {
    text-align: center;
    margin: 0 auto;
  }

  img {
    width: 100%;
    max-width: 400px;
    margin: 0 0 1em 0;
  }
</style>

{#if $user}
  <Nav {segment} />
{/if}

{#if !loading}
  <main>
    {#if !$user}
      <figure>
        <img alt="Distribuyendo" src="logo.png" />
      </figure>
      <LoginForm />
      {:else}
      <slot />
    {/if}
  </main>
{/if}
