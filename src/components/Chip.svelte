<style>
  .chip {
    color: rgba(0, 0, 0, 0.87);
    border: none;
    user-select: none;
    height: 32px;
    display: inline-flex;
    outline: 0;
    padding: 0;
    font-size: 0.8125rem;
    box-sizing: border-box;
    align-items: center;
    font-family: "Roboto", "Helvetica", "Arial", sans-serif;
    white-space: nowrap;
    border-radius: 16px;
    vertical-align: middle;
    justify-content: center;
    text-decoration: none;
    background-color: #e0e0e0;
  }

  .chip-label {
    overflow: hidden;
    white-space: nowrap;
    padding-left: 12px;
    padding-right: 12px;
    text-overflow: ellipsis;
  }

  button {
    color: rgba(0, 0, 0, 0.26);
    border: 0px;
    background: none;
    cursor: pointer;
    padding: 5px 10px 0 0;
    transition: .3s;
    -webkit-tap-highlight-color: rgba(0,0,0,0);
  }
  button:focus {
    outline: transparent;
  }
  button:hover {
    color: rgba(0, 0, 0, 0.4);
  }
</style>

<script>
  import { timesCircle } from "svelte-awesome/icons";
  import Icon from "svelte-awesome/components/Icon.svelte";
  export let nombre = '';
  export let handleClose;
</script>

{#if nombre}
  <div class="chip">
    <span class="chip-label">{nombre}</span>
    <button class="icon" on:click={handleClose}>
      <Icon data={timesCircle} scale={1.3} />
    </button>
  </div>
{/if}