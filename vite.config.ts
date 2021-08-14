import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import Icons, { ViteIconsResolver } from 'vite-plugin-icons';
import ViteComponents from 'vite-plugin-components';
import { HeadlessUiResolver } from './headlessui-resolver';

const path = require('path');

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [
		vue({
			script: {
				refSugar: true,
			},
			template: {
				compilerOptions: {
					// treat all tags with a dash as custom elements
					isCustomElement: tag => tag.includes('-') && !tag.startsWith('i-'),
				},
			},
		}),
		ViteComponents({
			globalComponentsDeclaration: true,
			customComponentResolvers: [HeadlessUiResolver(), ViteIconsResolver()],
			dirs: ['src/components', 'lib/components'],
		}),
		Icons(),
	],
	build: {
		lib: {
			entry: path.resolve(__dirname, 'lib/main.ts'),
			name: 'WebComponents',
			fileName: format => `web-components.${format}.js`,
		},
		rollupOptions: {
			// make sure to externalize deps that shouldn't be bundled
			// into your library
			external: ['vue'],
			output: {
				// Provide global variables to use in the UMD build
				// for externalized deps
				globals: {
					vue: 'Vue',
				},
			},
		},
	},
	server: {
		fs: {
			strict: false,
		},
	},
});
