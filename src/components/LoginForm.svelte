<script>
  import { user } from "../stores/user.js";
  let email = "";
  let password = "";

  function login() {
      user.set(() => ({}));
  }
</script>

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
    border: 1px solid #c47e29;
    background-color: #c47e29;
    color: #ffffff;
    font-size: 12px;
    font-weight: bold;
    padding: 12px 45px;
    letter-spacing: 1px;
    text-transform: uppercase;
    transition: transform 80ms ease-in;
  }
</style>

<form>
  <input bind:value={email} placeholder="email" />
  <input bind:value={password} placeholder="contraseña" type="password" />
</form>

<button on:click={login}>Ingresar</button>
