<script>
	import * as Fluent from "fluent-svelte";
	import "fluent-svelte/theme.css";
	import { base } from '$app/paths';
	import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';
</script>

<style>

	nav {
		display: flex;
		justify-content: left;
		align-items: center;
		padding: 8px;
	}

	h1, h2, h3, h4, h5, h6, span, p, nav a {
		font-family: 'Segoe UI', system-ui, -apple-system, BlinkMacSystemFont, Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
	}

	h1 {
		font-weight: 500;
		transition: 1s ease-in-out;
		animation: ease-in-out font-weight;
	}

	nav {
		background: var(--fds-solid-background-base);
		border-bottom: 1px solid rgba(205, 205, 205, 0.25);
	}

	nav a {
		text-decoration: none;
		color: white;
		margin-right: 14px;
	}

	nav a.logo img {
		width: 30px;
		height: 30px;
		border-radius: 100%;
		margin-top: 5px;
		margin-left: 5px;
		margin-right: 5px;
	}

	main {
		display: block;
		padding: 85px 65px;
	}

	main * {
		display: block;
	}

	main h1, main h2 {
		margin-top: 0;
	}

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

	@keyframes font-weight {
		0% {
			font-weight: 500;
		}
		25% {
			font-weight: 600;
		}
		100% {
			font-weight: 700;
		}
	}
</style>

<div>
	<Header />
	<main>
		<h1>Contact me</h1>
		<p>You can contact me on these:</p>
        	<Fluent.Button onClick="window.open('https://twitter.com/PrelevatedIns', '_blank')">Twitter</Fluent.Button>
		<Fluent.Button onClick="window.open('mailto:membermadde.insiddev25120@hotmail.com', '_blank')">Hotmail</Fluent.Button>
		<Fluent.Button onClick="window.open('https://github.com/rvc11twil', '_blank')">GitHub</Fluent.Button>
		<Fluent.Button onClick="window.open('https://app.revolt.chat/swzkRmn0', '_blank')">Revolt</Fluent.Button>
	</main>
	<Footer />
</div>
