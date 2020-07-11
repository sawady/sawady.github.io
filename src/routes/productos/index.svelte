<script context="module">
	export function preload({ params, query }) {
		return { productos: [] };
	}
</script>

<script>
	export let productos;
</script>

<style>
	ul {
		margin: 0 0 1em 0;
		line-height: 1.5;
	}

	h1 {
		text-align: center;
	}
</style>

<svelte:head>
	<title>Productos</title>
</svelte:head>

<h1>Elige productos</h1>

<ul>
	{#each productos as producto}
		<!-- we're using the non-standard `rel=prefetch` attribute to
				tell Sapper to load the data for the page as soon as
				the user hovers over the link or taps it, instead of
				waiting for the 'click' event -->
		<li><a rel='prefetch' href='productos/{producto.slug}'>{producto.title}</a></li>
	{/each}
</ul>