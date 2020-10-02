<style>
  .alert {
    padding: .75rem 1.25rem;
    border: 1px solid;
    border-radius: .25rem;
    margin-top: 10px;
  }

  .warning {
    background-color: #fff3cd;
    color: #856404;
    border-color:  #ffeeba;
  }

  .danger {
    color: #721c24;
    background-color: #f8d7da;
    border-color: #f5c6cb;
  }

  .success {
    color: #155724;
    background-color: #d4edda;
    border-color: #c3e6cb;
  }
</style>

<script>
  export let className = "warning";
</script>

<div class={`alert ${className}`}>
  <slot />
</div>