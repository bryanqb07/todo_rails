var path = require('path');

module.exports = {
    entry: './frontend/util/todo_redux.jsx',
    output: {
        path: __dirname + "/app/assets/javascripts",
        filename: "bundle.js"
    },
    module: {
        rules: [
            {
                test: [/\.jsx?$/],
                exclude: /(node_modules)/,
                use: {
                    loader: 'babel-loader',
                    query: {
                        presets: ["@babel/preset-env", "@babel/preset-react"]
                    }
                },
            }
        ]
    },
    devtool: 'source-map',
    resolve: {
        extensions: ['.js', '.jsx', '*']
  }
};
