var path = require('path');

module.exports = {
    entry: './index.js',
    mode: 'production',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'index.js',
        library: 'babel-plugin-no-console-logs',
        libraryTarget: 'umd'
    }
}