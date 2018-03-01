/**
 * nuxt config for project
 * @author dongkunshan(windwithfo@yeah.net)
 */

import Linter from 'stylelint-webpack-plugin';

module.exports = {
  build: {
    extend(config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          test: /\.(js|vue|ts)$/,
          enforce: 'pre',
          use: {
            loader: 'eslint-loader',
            options: {
              configFile: '.eslintrc.js'
            }
          },
          exclude: /node_modules|\.nuxt/
        });
      }
      return config;
    },
    plugins: [
      new Linter({
        configFile: '.stylelintrc.js',
        files: '**/*.vue',
        ignorePath: 'node_modules/**',
        syntax: 'scss'
      })
    ]
  },

  /*
  ** Headers of the page
  */
  head: {
    title: 'nuxt js starter',
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
  },
  modules: ['~/modules/typescript'],
  plugins: [{ src: '~/plugins/localStorage.js', ssr: false }]
};
