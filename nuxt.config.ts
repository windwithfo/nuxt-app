/**
 * nuxt js 全局配置
 * @author dongkunshan(dongkunshan@xueleyun.com)
 */

import Linter from 'stylelint-webpack-plugin'
import { Configuration } from '@nuxt/types'

const config: Configuration = {
  // Type or Press `Ctrl + Space` for autocompletion
  // universal or spa
  // mode: 'universal',
  mode: 'spa',
  /*
  ** Headers of the page
  */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
    'ant-design-vue/dist/antd.css'
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '@/plugins/antd-ui',
    { src: '~/plugins/localStorage.js', ssr: false }
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module',
    ['@nuxt/typescript-build', {
      typeCheck: {
        eslint: true
      },
      ignoreNotFoundWarnings: true
    }]
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/pwa'
  ],
  /*
  ** Axios module configuration
  ** See https://axios.nuxtjs.org/options
  */
  axios: {
  },
  /*
  ** Build configuration
  */
  build: {
    additionalExtensions: ['ts', 'tsx'],
    babel: {
      plugins: [
        ['@babel/plugin-proposal-decorators', { legacy: true }],
        ['@babel/plugin-proposal-class-properties', { loose: true }]
      ]
    },
    plugins: [
      new Linter({
        configFile: '.stylelintrc.js',
        files: ['page/**/*.vue', 'assets/**/*.css'],
        ignorePath: 'node_modules/**',
        syntax: 'scss'
      })
    ],
    /*
    ** You can extend webpack config here
    ** extend (config, ctx)
    */
    extend () {
      // config!.resolve!.extensions!.push('.ts')
      // config!.module!.rules.push({
      //   test: /\.ts$/,
      //   use: [
      //     {
      //       loader: 'babel-loader'
      //     },
      //     {
      //       loader: 'ts-loader',
      //       options: {
      //         appendTsSuffixTo: [/\.vue$/]
      //       }
      //     }
      //   ],
      //   exclude: /node_modules/
      // })
    }
  },
  server: {
    port: 3000,
    host: '0.0.0.0',
    timing: true,
    socket: '/tmp/nuxt.socket'
  },
  pwa: {
    workbox: {
      dev: false,
      cachingExtensions: '@/plugins/workbox-range-request.js',
    }
  },
  dev: true
}

export default config
