<script>
  import LoginForm from "../components/LoginForm.svelte";
  import { user } from "../stores/User.js";
</script>

<style>
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

<svelte:head>
  <title>Distribuyendo</title>
</svelte:head>

{#if !$user}
  <figure>
    <img alt="Distribuyendo" src="logo.png" />
  </figure>
  <LoginForm />
{/if}
