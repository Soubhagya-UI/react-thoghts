module.exports = {
    entry: './src/index.js',
    output: {
    filename: 'bundle.js'
    },
    devtool: 'source-map',
    module: {
    rules: [
    {
    loader: 'babel-loader',
    test: /\.js| jsx$/,
    exclude: /node_modules/
    },
    { test: /\.css$/, loader: "style-loader!css-loader?importLoaders=1" },
    { test: /\.(png||jpe?g|woff|woff2|eot|ttf|svg)$/, loader: 'url-loader?limit=100000' }
    ]
    },
    mode: "production",
    devServer: {
    port: 8000,
    historyApiFallback: true
    },
    performance: { hints: false }
    };