// babel.config.js 

module.exports = {
    "presets": [
        "@babel/env",
        "@babel/react",
        "@babel/preset-typescript"
    ],
    "plugins": [
        "@babel/plugin-proposal-class-properties",
        '@babel/plugin-transform-runtime',
    ]
};