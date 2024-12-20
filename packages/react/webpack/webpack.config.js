const path = require("path");

module.exports = {
    entry: path.resolve(__dirname, "../src/index.js"),
    output: {
        filename: `bundle.js`,
        path: path.resolve(__dirname, "../lib") 
    },
    mode: "development",
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                use: {
                    loader: "babel-loader",
                },
                exclude: /node_modules/
            },
            {
                test: /\.(scss|sass)$/,
                use: ['css-loader', 'sass-loader']
            },
            {
                test: /\.css$/,
                use: {
                    loader: "css-loader"
                }
            }
        ]
    }
}