import path   from 'path';
import Linter from 'stylelint-webpack-plugin';

const projectRoot = path.resolve(__dirname, '');

module.exports = {
  build: {
    plugins: [
      new Linter({
        configFile: '.stylelintrc.js',
        files: '**/*.vue',
        ignorePath: 'node_modules/**',
        syntax: 'less'
      })
    ],
    loaders: [
      {
        test: /\.js$/,
        enforce: 'pre',
        use: [
          {
            loader: 'eslint-loader',
            options: {
              configFile: './.eslintrc.js'
            }
          }
        ],
        include: projectRoot,
        exclude: /node_modules|.nuxt/
      },
      {
        test: /\.vue$/,
        enforce: 'pre',
        use: [
          {
            loader: 'eslint-loader',
            options: {
              configFile: './.eslintrc.js'
            }
          }
        ],
        include: projectRoot,
        exclude: /node_modules|.nuxt/
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/,
        loader: 'url-loader',
        query: {
          limit: 1000,
          name: 'img/[name].[hash:7].[ext]'
        }
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'url-loader',
        query: {
          limit: 1000,
          name: 'fonts/[name].[hash:7].[ext]'
        }
      }
    ]
  },

  /*
  ** Headers of the page
  */
  head: {
    title: 'starter',
    meta: [
      {
        charset: 'utf-8'
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1'
      },
      {
        hid: 'description',
        name: 'description',
        content: 'Nuxt.js project'
      }
    ],
    link: [
      {
        rel: 'icon',
        type: 'image/x-icon',
        href: '/favicon.ico'
      }
    ]
  },

  /*
  ** Global CSS
  */
  css: ['~assets/css/main.css'],

  /*
  ** Customize the progress-bar color
  */
  loading: {
    color: '#3B8070'
  }
};
