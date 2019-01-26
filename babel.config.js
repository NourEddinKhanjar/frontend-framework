const presets = [
    "@babel/preset-env",
    "@babel/preset-typescript",
    "minify"
];

const plugins = [
    ["@babel/plugin-proposal-decorators", {"legacy": true}],
    ["@babel/plugin-proposal-class-properties", {"loose": true}],
    "babel-plugin-transform-es2015-modules-commonjs"
];

module.exports = {presets, plugins};
