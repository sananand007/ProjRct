const path = require("path")
const webpack = require("webpack")

module.exports = {
    entry: "./src/index.js",
    mode: "developement",
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /(node_modules|bower_components)/,
                loader: "babel-loader",
                options: { presets: ["@babel/env"] }
            },
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"]
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: ["file-loader"]
            }
        ]
    },
    resolve: { extensions: ["*", ".js", ".jsx"] },
    output: {
    path: path.resolve(__dirname, "dist/"),
    publicPath: "/dist/",
    filename: "bundle.js"
  },
    devServer: {
    contentBase: path.join(__dirname, "public/"),
    port: 4000,
    watchContentBase: true,
    progress: true,
    compress: true,
    publicPath: "http://localhost:4000/dist/",
    hotOnly: true
  },
    plugins: [new webpack.HotModuleReplacementPlugin()]
}
