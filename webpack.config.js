module.exports = {
    watch: true,
    entry: "./src/js/index.js",
    output: {
        path: __dirname + "/static",
        filename: "bundle.js"
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"]
            }
        ]
    }
};