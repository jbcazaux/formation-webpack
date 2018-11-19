module.exports = api => {
    api.cache(false)
    return {
        plugins: ['@babel/plugin-proposal-class-properties', '@babel/plugin-syntax-dynamic-import'],
        presets: [
          ['@babel/preset-env', {modules: false}],
          ["@babel/preset-react"]
        ],

        /* "module" - Parse the file using the ECMAScript Module grammar.
        Files are automatically strict, and import/export statements are allowed. */
        sourceType: 'module'
    }
}
