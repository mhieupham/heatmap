/*eslint-env node*/
module.exports = {
    presets: [
        '@babel/react',
        '@babel/env',
        '@babel/preset-typescript',
    ],
    plugins: [
        '@babel/plugin-syntax-dynamic-import',
        '@babel/plugin-proposal-object-rest-spread',
        '@babel/plugin-transform-runtime',
        ["@babel/plugin-transform-modules-commonjs"],
        [
            "@babel/plugin-transform-spread",
            {
                "loose": true
            }
        ],
        // NOTE: The order of the decorator and class-property plugins is important
        // here. Decorators must be processed first before class properties, see:
        // https://babeljs.io/docs/en/plugins#plugin-ordering
        ['@babel/plugin-proposal-decorators', {legacy: true}],
        ['@babel/plugin-proposal-class-properties', {loose: true}]
    ],
};
