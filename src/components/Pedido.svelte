<style>
  .pedido {
    margin: 10px 0;
    padding: 10px 0;
    border-bottom: 1px #c47e29 solid;
    display: flex;
    flex-direction: column;
  }

  .cliente {
    color: #0684b4;
    text-transform: capitalize;
    font-weight: bold;
  }

  .estado {
    color: #f1c747;
  }

  .row {
    display: flex;
    justify-content: space-between;
  }

  button {
    display: inline-block;
    text-align: center;
    box-sizing: border-box;
    border-radius: .25rem;
    border: 1px solid transparent;
    background-color: #c47e29;
    color: #ffffff;
    font-weight: 400;
    font-size: 12px;
    padding: 10px 15px;
    letter-spacing: 1px;
    text-transform: uppercase;
    transition: 80ms ease-in;
  }
</style>

<script>
  import { formatDateAndTime } from "../Utils/FormatDateAndTime.js";
  import { goto } from '@sapper/app';
  export let pedido;

  const handleClick = () => {
    goto(`pedido/${pedido.id}`);
  }

</script>

<div class="pedido">
  <div>
    Cliente: <span class="cliente">{pedido.cliente}</span>
  </div>
  <div>
    Estado: <span class="estado">{pedido.confirmado ? 'Confirmado' : 'Pendiente'}</span>
  </div>
  <div class="row">
    <div>
      Creado el: <span class="fecha">{formatDateAndTime(pedido.created_at)}</span>
    </div>
    <button on:click={handleClick}>ver mas</button>
  </div>
</div>