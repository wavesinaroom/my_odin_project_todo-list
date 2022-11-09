const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
  mode: 'development',
  entry:{
    container: './src/container.js',
    component: './src/component.js',
    index: './src/index.js',
    card: './src/card.js',
    list: './src/list.js',
    login: './src/login-panel.js',
    project: './src/project.js',
    session: './src/session.js',
    checklistitem: './src/check-item.js'
  }, 
  output: {
    filename: '[name].bundle.js',
    path: '/',
    //path: path.resolve(__dirname, 'dist'),
    clean: true,
  },
  optimization: {
    runtimeChunk: 'single',
  },
  devtool: 'inline-source-map',
  devServer:{
    static: './dist',
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Output Management',
    }),
  ],
   module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: 'asset/resource',
      },
    ],
  },
};
