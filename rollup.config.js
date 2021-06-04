import svelte from 'rollup-plugin-svelte';
import resolve from '@rollup/plugin-node-resolve';
const pkg = require('./package.json');

/* const name = pkg.name
	.replace(/^(@\S+\/)?(svelte-)?(\S+)/, '$3')
	.replace(/^\w/, m => m.toUpperCase())
	.replace(/-\w/g, m => m[1].toUpperCase()); */

export default {
	input: 'src/Card.svelte',
	output: [
		{ file: pkg.module, 'format': 'es' },
		{ file: pkg.main, 'format': 'umd', name: 'Card' }
	],
	plugins: [
		svelte(),
		resolve()
	]
};