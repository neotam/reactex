const path = require('path');

module.exports = {

  // Mode tells the webpack whether to use built-in optmization, default is to production
  // It cam be this.development, proeuction or none  

  mode: 'development',
  entry: './index.js',
  watch: true,
  output: {
    path: path.join(__dirname, 'dist'),
    publicPath: '/dist/',
    filename: "bundle.js",
    chunkFilename: '[name].js'
  },



  resolve: {
    extensions: ['.json', '.js', '.jsx']
  },
  devtool: 'source-map',
  devServer: {
    host: 'localhost',
    port: 5053,
    static: ["./public"],

    open: true,  //Open the browser after succesfully started
    hot: false,    // Hot realoading and HMR (Hot Module Replacement), hot reload refreshes only files changed whtiout losing app state
    liveReload: true  // Disable or enable live reload on the browser. "hot" must be false for this to take effect 
  },

  // Defining the rules for webpack to pick up the 
  // source files to compile using specified transpilers or compilers 
  // And, loader describes to webpack, how to compile when it comes across require()/import statements before
  // including in build 
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/, 
        use: 'babel-loader', 
        exclude: [path.resolve(__dirname, 'node_modules')]
      }
    ]
  }

};