const path = require('path'),
    HTMLWebpackPlugin = require('html-webpack-plugin'),
    {CleanWebpackPlugin} = require('clean-webpack-plugin'),
    MiniCssExtractPlugin = require('mini-css-extract-plugin'),
    devMode = process.env.NODE_ENV !== 'production',
    plugins = []


plugins.push(
    new CleanWebpackPlugin,
    new HTMLWebpackPlugin({
        template: './index.html'
    })
)

if (!devMode) {
    plugins.push(new MiniCssExtractPlugin({
        filename: '[name].[hash].css'
    }));
}


module.exports = {
    mode: 'production',
    context: path.resolve(__dirname, 'src'),
    entry: './scripts/index.js',
    output: {
        filename: '[name].[hash].js',
        path: path.resolve(__dirname, 'dist')
    },
    devServer: {
        port: 7005,
        contentBase: path.join(__dirname, 'dist'),
        compress: true,
    },
    plugins,
    module: {
        rules: [
            {
                test: /\.(sa|sc|c)ss$/,
                use: [
                    devMode ? 'style-loader' : MiniCssExtractPlugin.loader,
                    'css-loader',
                    'sass-loader',
                ],
            },
            {
                test: /\.(png|jp?eg|gif|svg)$/,
                use: ['file-loader']
            },
            {
                test: /\.(woff?2|ttf|eot)$/,
                use: ['file-loader']
            }
]}}