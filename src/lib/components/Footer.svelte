<script>
	import * as Fluent from "fluent-svelte";
</script>

<style>
	footer {
		padding-top: 10px;
		padding-bottom: 10px;
		padding-left: 25px;
		background: var(--fds-solid-background-base);
		border-top: 1px solid rgba(205, 205, 205, 0.25);
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		position: absolute;
		bottom: 0;
		width: calc(100vw - 25px);
	}
</style>

<footer>
	<h5 style="margin: 0px; margin-top: 10px">Powered by:</h5>
	<Fluent.Button href="https://kit.svelte.dev" variant="hyperlink" style="margin-top: 10px; margin-bottom: 10px">SvelteKit</Fluent.Button>
	<Fluent.Button href="https://fluent-svelte.vercel.app/" variant="hyperlink" style="margin-bottom: 10px">Fluent Svelte</Fluent.Button>
	<Fluent.Button href="https://vercel.com" variant="hyperlink" style="margin-bottom: 10px">Vercel</Fluent.Button>
	<h5 style="margin: 0px; margin-bottom: 10px">Made and contributed by:</h5>
	<Fluent.Button href="/" variant="hyperlink" style="margin-bottom: 10px">RedVelvetCake11</Fluent.Button>
</footer>
