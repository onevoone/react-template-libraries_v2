const path = require('path');
const scss = require('rollup-plugin-scss');
const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');
const alias = require('@rollup/plugin-alias');
const postcss = require('postcss');
const { nodeResolve } = require('@rollup/plugin-node-resolve');

module.exports = {
	rollup(config, options) {
		config.plugins.push(
			scss({
				output: 'dist/index.css',
			}),
		);
		return config;
	},
};
