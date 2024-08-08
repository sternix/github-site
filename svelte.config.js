import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

const dev = process.argv.includes('dev');

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: vitePreprocess(),
	kit: {
		// GitHub Pages cannot serve content from directories with special characters like underscores.
		// Required as the default is _app
		appDir: 'app', 
		adapter: adapter({
			fallback: 'index.html'
		}),
		// eğer subdir'dan çalışacaksa
		paths: {
			base: dev ? '' : process.env.BASE_PATH,
		}
	}
};

export default config;
