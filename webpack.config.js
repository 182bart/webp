const path = require("path");

module.export =
{
  entry: ".src/index.js",
  output:
  {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js"
  },
  devServer:{
    contentBase: path.join(__dirname, "dist"),
    port: 9000,
    watchContentBase: true
  },
  module:{
    rules:[{
      test:/\.css$/,
      use:["style-loader", "css-loader"]
    }]
  }

}
