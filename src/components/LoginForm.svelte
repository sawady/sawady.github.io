<style>
  form {
    padding-bottom: 15px;
    margin: 0 auto;
    flex-direction: column;
    max-width: 300px;
  }

  input {
    box-sizing: border-box;
    background-color: #eee;
    border-radius: 4px;
    border: none;
    padding: 12px 15px;
    margin: 8px 0;
    width: 100%;
    max-width: 300px;
  }

  button {
    display: flex;
    margin: 0 auto;
    box-sizing: border-box;
    border-radius: 20px;
    border: 1px solid;
    color: #ffffff;
    font-size: 12px;
    font-weight: bold;
    padding: 12px 45px;
    letter-spacing: 1px;
    text-transform: uppercase;
    transition: transform 80ms ease-in;
  }

  .enabled {
    background-color: #c47e29;
    border-color: #c47e29;
  }

  .disabled {
    background-color: #cab7a2;
    background-color: #cab7a2;
  }

  .center {
    display: flex;
    justify-content: center;
  }
</style>

<script>
  import { user } from "../stores/user.js";
  import { getUsuarios } from "../service/Usuarios.js";
  import { users } from "svelte-awesome/icons";
  import { carrito } from "../stores/Carrito.js";
  import { login, me } from "../service/Auth.js";
  import { getToken, saveToken } from '../service/Storage.js';
  import Alert from "../components/Alert.svelte";
  import Spinner from "../components/Spinner.svelte";

  let datos = {
    email: "",
    password: "",
  }
  let error = false;
  let loading = false;

  const handleSubmit = async (e) => {
    e.preventDefault();
    error = false;
    loading = true;
    try {
      await login(datos);
      await me();
    } catch (_) {
      error = true;
      datos = {};
    }
    loading = false;
    e.target.reset();
  }
</script>

<form on:submit={handleSubmit}>
  <input bind:value={datos.email} placeholder="email" type="email" required />
  <input bind:value={datos.password} placeholder="contraseña" type="password" required />
  <button type="submit" class={ loading ? 'disabled' : 'enabled' } disabled={loading}>Ingresar</button>
  {#if loading}
    <div class="center">
      <Spinner />
    </div>
  {/if}
</form>

{#if error}
  <Alert className="danger">
    Los datos ingresados no son validos.
  </Alert>
{/if}
