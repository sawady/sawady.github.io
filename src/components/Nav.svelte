<script>
  import { user } from "../stores/User.js";

  export let segment;

  function logout() {
    user.set(null);
  }
</script>

<style>
  nav {
    border-bottom: 1px solid rgba(255, 62, 0, 0.1);
    font-weight: 300;
    padding: 0 1em;
    display: flex;
    justify-content: space-between;
  }

  ul {
    margin: 0;
    padding: 0;
  }

  /* clearfix */
  ul::after {
    content: "";
    display: block;
    clear: both;
  }

  li {
    display: block;
    float: left;
  }

  [aria-current] {
    position: relative;
    display: inline-block;
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
    padding: 1em 0.5em;
    display: block;
  }

  .button {
    cursor: pointer;
  }

  .logo {
    height: 50px;
  }
</style>

<nav>
  <ul>
    <li>
      <img class="logo" alt="" src="logo.png" />
    </li>
    <li>
      <a aria-current={segment === undefined ? 'page' : undefined} href=".">
        home
      </a>
    </li>
    <li>
      <a
        aria-current={segment === 'pedidos' ? 'page' : undefined}
        href="pedidos">
        pedidos
      </a>
    </li>

    <!-- for the productos link, we're using rel=prefetch so that Sapper prefetches
		     the productos data when we hover over the link or tap it on a touchscreen -->
    <li>
      <a
        rel="prefetch"
        aria-current={segment === 'productos' ? 'page' : undefined}
        href="productos">
        productos
      </a>
    </li>
  </ul>
  <ul class="end">
    <li>
      <a class="button" href="/" on:click={logout}>Salir</a>
    </li>
  </ul>
</nav>
