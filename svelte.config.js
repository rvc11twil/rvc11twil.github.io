import adapter from '@sveltejs/adapter-vercel';

export default {
	kit: {
		adapter: adapter({
			// Enable SSR for all pages
			ssr: true,
			// Enable edge functions for better performance
			edge: false,
			// Enable external HTTP server for handling server-side requests
			external: [],
			// Enable pre-rendering for better performance
			prerender: {
				handleHttpError: 'warn',
				handleMissingId: 'warn',
				handleFallback: 'warn'
			}
		}),
		// Ensure client-side routing works with Vercel
		alias: {
			'$lib': './src/lib',
			'$app/stores': '@sveltejs/kit/src/runtime/app/stores',
			'$app/navigation': '@sveltejs/kit/src/runtime/app/navigation',
			'$app/forms': '@sveltejs/kit/src/runtime/app/forms'
		}
	}
};
