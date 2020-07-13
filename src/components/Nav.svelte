<script>
  import Icon from "svelte-awesome/components/Icon.svelte";
  import { windowClose, shoppingCart, listAlt } from "svelte-awesome/icons";

  import { user } from "../stores/user.js";

  export let segment;

  function logout() {
    user.set(null);
  }
</script>

<style>
  nav {
    border-bottom: 1px solid rgba(255, 62, 0, 0.1);
    padding: 0 1em;
    display: flex;
    justify-content: space-between;
  }

  [aria-current] {
    position: relative;
  }

  [aria-current]::after {
    position: absolute;
    content: "";
    width: calc(100% - 1em);
    height: 2px;
    background-color: #c47e29;
    display: block;
    bottom: -1px;
  }

  a {
    text-decoration: none;
    padding: 0.75em 1em;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  a > span {
    margin-left: 10px;
  }

  @media (max-width: 375px) {
    a > span {
      display: none;
    }
  }

  img {
    height: 1.5em;
  }

  .section {
    display: flex;
  }
</style>

<nav>
  <div class="section">
    <a aria-current={segment === undefined ? 'page' : undefined} href=".">
      <img alt="" src="logo.png" />
    </a>
    <a aria-current={segment === 'pedidos' ? 'page' : undefined} href="pedidos">
      <Icon data={listAlt} />
      <span media="(max-width: 375px)">pedidos</span>
    </a>
    <a
      rel="prefetch"
      aria-current={segment === 'productos' ? 'page' : undefined}
      href="productos">
      <Icon data={shoppingCart} />
      <span media="(max-width: 375px)">productos</span>
    </a>
  </div>
  <div class="section">
    <a style="cursor: pointer" href="/" on:click={logout}>
      <Icon data={windowClose} />
    </a>
  </div>
</nav>
