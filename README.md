# ProjRct

Anime Wikia

#### For refreshing npm

```
sudo rm -rf node_modules
npm rebuid
npm i
```

#### webpack.config.js

```
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
                test: /\.(gif|png|jpe?g|svg)$/i,
                use: [
                        'file-loader',
                        {
                        loader: 'image-webpack-loader',
                        options: {
                        }
            }
            ]
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
    publicPath: "http://localhost:4000/dist/",
    hotOnly: true
  },
    plugins: [new webpack.HotModuleReplacementPlugin()]
}
``` 
