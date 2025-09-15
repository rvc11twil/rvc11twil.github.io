<script>
	import * as Fluent from "fluent-svelte";
</script>

<style>
	nav {
		display: flex;
		justify-content: left;
		align-items: center;
		padding: 8px;
		background: var(--fds-solid-background-base);
		border-bottom: 1px solid rgba(205, 205, 205, 0.25);
	}

	nav a {
		text-decoration: none;
		color: white;
		margin-right: 14px !important;
	}

	nav a.logo img {
		width: 30px;
		height: 30px;
		border-radius: 100%;
		margin-top: 5px;
		margin-left: 5px;
		margin-right: 5px;
	}
</style>

<nav>
	<a href="/" class="logo"><img src="/favicon.png" alt="rvc11's pfp"></a>
	<Fluent.Button href="/" style="margin-right: 14px;">Home</Fluent.Button>
	<Fluent.Button href="/plans" style="margin-right: 14px;" variant="hyperlink">Plans</Fluent.Button>
	<Fluent.Button href="/contact" variant="hyperlink">Contact me</Fluent.Button>
</nav>
