const { writeFileSync } = require('fs');
const path = require('path');
const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');
const alias = require('@rollup/plugin-alias');
const scss = require('rollup-plugin-scss');
// const postcss = require('rollup-plugin-postcss');
// const postcss = require('postcss');
// const { nodeResolve } = require('@rollup/plugin-node-resolve');
const styles = require('rollup-plugin-styles');
const { rollup } = require('rollup');
const rebasePlugin = require('rollup-plugin-rebase');
// import { rollup } from "rollup"
// import rebasePlugin from "rollup-plugin-rebase"

module.exports = {
	rollup(config, options) {
		config.plugins.push(
			// scss({
			// 	include: ['./src/ui/styles/**/*'],
			// 	output: function (styles, styleNodes) {
			// 		writeFileSync('dist/index.css', styles)
			// 	},
			// 	// output: 'dist/index.css',
			// }),
			styles(),
			rebasePlugin({
				// assetFolder: 'dist/index.css',
				// include: [ './src/ui/styles/styles.scss' ],
			})
		);
		return config;
	},
};
