const webpack = require('webpack');
const path = require('path');

const DEV = process.env.NODE_ENV !== 'production';
console.log('*** path ****',path.resolve(__dirname, 'build/client'))
module.exports = {
  bail: !DEV,
  devtool: DEV ? 'cheap-module-source-map' : 'source-map',
  entry: './src/client.js',
  output: {
    path: path.resolve(__dirname, 'build/client'),
    filename: 'bundle.js',
    publicPath: '/',
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.scss$/,
        loader: 'style-loader!css-loader!sass-loader'
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /(node_modules)/,
      },
      {
        test: /\.json$/,
        loader: 'json-loader',
      },
      {
        test: /\.(graphql|gql)$/,
        exclude: /node_modules/,
        loader: 'graphql-tag/loader',
      },
      {
        test: /\.ico$/,
        use: [{
            loader: 'file-loader',
            options: {
                name: '[name].[ext]',
                outputPath: '/bundle/client'
            }
        }]
      }
    ],
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(DEV ? 'development' : 'production'),
      },
    }),
    !DEV &&
      new webpack.optimize.UglifyJsPlugin({
        compress: {
          screw_ie8: true, // React doesn't support IE8
          warnings: false,
        },
        mangle: {
          screw_ie8: true,
        },
        output: {
          comments: true,
          screw_ie8: true,
        },
      }),
    DEV && new webpack.optimize.AggressiveMergingPlugin(),
  ].filter(Boolean),
};
// (svg|png|gif|jpg|
// use: [{
//             loader: 'file-loader',
//             options: {
//                 name: '[name].[ext]',
//                 outputPath: '/static'
//             }
//         }]
 // use: ['style-loader','css-loader','sass-loader'] 
// include: path.resolve(__dirname, path),
        // use: {
        //   loader: 'file-loader',
        //   options: {
        //     context: 'src/assets',
        //     name: 'root[path][name].[ext]'
        //   }
        // }
