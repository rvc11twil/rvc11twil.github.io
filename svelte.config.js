import adapter from '@sveltejs/adapter-static';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter({
			// Fallback for client-side routing
			fallback: 'index.html',
			// Output directory for the static site
			pages: 'build',
			assets: 'build',
			// Enable pre-rendering for better performance
			precompress: true
		}),
		// Ensure client-side routing works with Vercel
		alias: {
			'$lib': './src/lib'
		}
	}
};

export default config;
