<script>
	import * as Fluent from "fluent-svelte";
	import "fluent-svelte/theme.css";
	import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';
</script>

<style>
	h1, h2, h3, h4, h5, h6, span, p {
		font-family: 'Segoe UI', system-ui, -apple-system, BlinkMacSystemFont, Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
	}

	h1 {
		font-weight: 500;
		transition: 1s ease-in-out;
		animation: ease-in-out font-weight;
	}

	h1:hover {
		font-weight: 700;
		text-transform: uppercase;
		letter-spacing: 10px;
	}

	main {
		display: block;
		text-align: center;
		padding: 85px 10px;
	}

	main * {
		display: block;
	}

	main h1 {
		margin-top: 0;
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
		<h1>Welcome to my website</h1>
		<p>Hello, I'm rvc11, I like to write code.</p>
		<Fluent.InfoBar style="max-width: 768px; margin: 0 auto; text-align: left" severity="caution" title="Important!">This website is under construction. It's my first time making an website using Svelte. Thank you for your patience.</Fluent.InfoBar>
	</main>
	<Footer />
</div>
