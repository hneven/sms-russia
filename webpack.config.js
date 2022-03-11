const path = require('path');
const nodeExternals = require('webpack-node-externals');

module.exports = {
    mode: "production",
    target: "node",
    devtool: "inline-source-map",
    entry: {
        sms: "./src/handlerSms.ts",
        mail: "./src/handlerEmail.ts"
    },
    output: {
        libraryTarget: 'commonjs2',
        path: path.resolve(__dirname, './dist'),
        filename: "[name].js" // <--- Will be compiled to this single file
    },
    externals: [nodeExternals()],
    resolve: {
        extensions: [".ts", ".tsx", ".js"],
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                loader: "ts-loader"
            }
        ]
    }
};