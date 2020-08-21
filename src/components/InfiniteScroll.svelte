<script>
  import { onMount } from "svelte";
  import Spinner from "./Spinner.svelte";

  export let handleScroll = () => null;
  export let hasMore = false;
  let loading = false;
  let options = {
    rootMargin: '0px',
    threshold: 1
  };
  let observer = new IntersectionObserver(handleIntersection, options);

  async function handleIntersection(event) {
    const [entries] = event
    try {
      if (!entries.isIntersecting || !hasMore) {
        return;
      }
      loading = true;
      await handleScroll();
      loading = false;
    } catch (error) {
      console.log(error)
    }
  }

  onMount(() => {
    observer.observe(document.getElementById('last'));
  })
</script>

<style>
  .center {
    display: flex;
    justify-content: center;
  }
</style>

{#if loading}
  <div class="center">
    <Spinner />
  </div>
  {:else}
  <div id="last" />
{/if}