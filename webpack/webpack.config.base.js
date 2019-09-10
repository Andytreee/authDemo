// webpack 配置文档
import { build, resolve, PACKAGE_NAME, src } from './conf';
import CopyWebpackPlugin from 'copy-webpack-plugin';
import HtmlWebpackPlugin from 'html-webpack-plugin';


export default {
    output: {
        publicPath: '/',
        path: resolve(build + '/' + PACKAGE_NAME),
        filename: `assets/js/[name].[hash:8].js`
    },
    resolve: {
        extensions: ['.js', '.jsx', '.scss', '.css', '.less'],
        alias: {
            '@': resolve(src),
            conf: resolve(src + '/conf'),
            'react-dom': '@hot-loader/react-dom'
        }
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                include: resolve(src),
                use: ['babel-loader']
            },
            {
                test: /\.(woff|eot|ttf|svg)$/,
                include: resolve(src),
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 10,
                            name: 'assets/fonts/[name].[ext]'
                        }
                    }
                ]
            },
            {
                test: /\.html$/,
                loader: 'html-loader?minimize=false'
            },
            {
                // 图片加载处理
                test: /\.(png|jpg|jpeg|gif|ico|svg)$/,
                include: resolve(src),
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 1,
                            name: 'assets/images/[name].[ext]'
                        }
                    }
                ]
            }
        ]
    },

    plugins: [
        new HtmlWebpackPlugin({
            template: resolve(src + '/index.html'),
            filename: 'index.html',
        }),
        new CopyWebpackPlugin([
            {
                from: resolve(src + '/assets'),
                to: resolve(build + '/' + PACKAGE_NAME + '/assets'),
                toType: 'dir'
            }
        ])
    ]
};
