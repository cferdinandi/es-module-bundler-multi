let formats = ['iife', 'es', 'cjs'];

export default formats.map(function (format) {
	return {
		input: 'index.js',
		output: {
			file: `scripts${format === 'iife' ? '' : `.${format}`}.js`,
			format: format,
		}
	};
});