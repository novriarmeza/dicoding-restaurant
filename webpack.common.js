const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");
 
module.exports = {
   entry: "./src/index.js",
   output: {
       path: path.resolve(__dirname, "dist"),
       filename: "bundle.js"
   },
   module: {
       rules: [
            {
                test: /\.css$/,
                use: [
                    {
                        loader: "style-loader"
                    },
                    {
                        loader: "css-loader"
                    }
                ]
            },
        
            // {
            //     test: /\.(png|svg|jpg)$/,
            //     loader: 'url-loader'
            // }
            // {
            //     test: /\.html$/,
            //     use: ['html-loader']
            // },
            {
                test: /\.(jpg|png|svg)$/i,
                use:[
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[name].[ext]',
                            outputPath:'img/',
                            publicPath:'img/'
                        }
                    }
                ]
            }
       ]
   },
   plugins: [
       new HtmlWebpackPlugin({
           template: "./src/recipe.html",
           filename: "recipe.html"

       }),
       new HtmlWebpackPlugin({
        template: "./src/index.html",
        filename: "index.html"
       })
   ]
}