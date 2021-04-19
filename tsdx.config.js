const path = require('path');
const scss = require('rollup-plugin-scss');
const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');
const alias = require('@rollup/plugin-alias');
const postcss = require('postcss');
const { nodeResolve } = require('@rollup/plugin-node-resolve');

const customResolver = nodeResolve({
	extensions: ['.mjs', '.js', '.jsx', '.json', '.sass', '.scss']
});

const projectRootDir = path.resolve(__dirname);

module.exports = {
	rollup(config, options) {

		config.plugins.push(
			// alias({
			// 	entries: [
			// 		{
			// 			find: 'src',
			// 			replacement: path.resolve(projectRootDir, 'src')
			// 			// OR place `customResolver` here. See explanation below.
			// 		}
			// 	],
			// 	customResolver,
			// }),
			// nodeResolve(),
			scss({
				// output: false,

				// Filename to write all styles to
				// output: 'dist/index.css',

				// processor: () => postcss([autoprefixer({ overrideBrowserslist: 'Edge 18' })]),
				processor: css => postcss([autoprefixer])
					.process(css)
					.then(result => result.css)
			}),
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
