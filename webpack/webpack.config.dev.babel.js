import { dist, resolve, src } from "./conf";
import baseConfig from './webpack.config.base';
import { theme } from './theme';
import webpack from 'webpack';
import webpackMerge from 'webpack-merge';

const PORT = 8081; // 服务器端口
const HOST = '0.0.0.0';

export default webpackMerge(baseConfig, {
    mode: 'development',
    entry: [
        'react-hot-loader/patch', //  开启react代码的模块热替换（HMR）
        'webpack-dev-server/client?http://' + HOST + ':' + PORT, //  为webpack-dev-server的环境打包好运行代码
        'webpack/hot/only-dev-server', // 为热替换（HMR）打包好运行代码,//  only- 意味着只有成功更新运行代码才会执行热替换（HMR）
        resolve(src + '/app.js')
    ],
    module: {
        rules: [
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
    devtool: 'cheap-module-eval-source-map',
    plugins: [
        new webpack.HotModuleReplacementPlugin()//热加载插件
    ],
    devServer: { // 服务器
        host: HOST,
        port: PORT,
        inline: true,
        hot:  true,
        historyApiFallback: true, // using html5 router.
        contentBase: resolve(dist),
    }
});
