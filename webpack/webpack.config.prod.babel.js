import {build, PACKAGE_NAME, resolve, src } from "./conf";
import baseConfig from "./webpack.config.base";
import { theme } from "./theme.js";
import webpackMerge from "webpack-merge";


export default webpackMerge(baseConfig, {
    devtool: "source-map",
    mode: 'production',
    entry: {
        main: resolve(src + "/app.js"), // 主网站入口
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                include: resolve(src),
                use: ["babel-loader"]
            },
            {
                test: /\.(css|less)$/,
                include: [resolve('../node_modules'), resolve(src)],
                use: [
                    { loader: 'style-loader' },
                    { loader: 'css-loader'},
                    { loader: 'postcss-loader'},
                    { loader: 'less-loader', options: { javascriptEnabled: true, modifyVars: theme } }
                ]
            }
        ]
    },
    optimization: {
        splitChunks: {
            chunks: 'all',
            minSize: 30000,
            minChunks: 1,
        },
    },
});
