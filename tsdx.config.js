const postcss = require('rollup-plugin-postcss');
const scss = require('rollup-plugin-scss');
const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');

module.exports = {
	rollup(config, options) {
		config.plugins.push(
			scss(),
			// autoprefixer(),
			// cssnano({
			// 	preset: 'default',
			// }),
		);
		// 	postcss({
		// 		modules: true,
		// 		plugins: [
		// 			autoprefixer(),
		// 			cssnano({
		// 				preset: 'default',
		// 			}),
		// 		],
		// 		inject: false,
		// 		// only write out CSS for the first bundle (avoids pointless extra files):
		// 		extract: !!options.writeMeta,
		// 	})
		// );
		return config;
	},
};
