const path = require("path")

module.exports = {
    mode: "production",
    entry: {
        index: { import: "./src/index.js" }
    },
    module: {
        rules: [
            {
                test: /\.(js|mjs|jsx|ts|tsx)$/,
                exclude: /node_modules/,
                loader: "babel-loader",
            },
            {
                test: /\.css$/i,
                loader: "css-loader",
                //  use: ['style-loader','css-loader','sass-loader']
            }
            
        ],
    },
    resolve: {
        extensions: ['.js', '.jsx'],
      },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: "skvsharedcomponents.min.js",
        library: 'skvsharedcomponents',
        libraryTarget: 'umd',
        clean: true
    },
}