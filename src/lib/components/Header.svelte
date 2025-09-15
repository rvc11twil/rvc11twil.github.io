<script>
	import * as Fluent from "fluent-svelte";
	import { page } from '$app/stores';
	import { base } from '$app/paths';

	// Default pages with their display names and paths
	export let pages = [
		{ name: 'Home', path: '/' },
		{ name: 'Plans', path: '/plans' },
		{ name: 'Contact', path: '/contact' }
	];

	// Function to check if a path is the current page
	function isCurrentPath(path) {
		const currentPath = $page.url.pathname;
		return currentPath === path || 
		       (path !== '/' && currentPath.startsWith(path) && 
		        (currentPath === path || currentPath.startsWith(`${path}/`)));
	}
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
	<a href="{base}/" class="logo"><img src="{base}/pfp.png" alt="rvc11's pfp"></a>
	{#each pages as page}
		{#if !isCurrentPath(page.path)}
		<Fluent.Button
			href="{base}{page.path}"
			variant="hyperlink"
			style="margin-right: 14px;"
		>
			{page.name}
		</Fluent.Button>
		{:else}
		<Fluent.Button
			href="{base}{page.path}"
			style="margin-right: 14px;"
		>
			{page.name}
		</Fluent.Button>
		{/if}
	{/each}
</nav>
