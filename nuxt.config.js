
export default {
  /*
  ** Headers of the page
  */
  head: {
    title: process.env.npm_package_name || '',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { property: 'og:title', content: process.env.npm_package_name || '' },
      { property: 'og:type', content: 'website' },
      // { property: 'og:url', content: '' },
      // { property: 'og:image', content:'' },
      { property: 'og:description', content: process.env.npm_package_description || '' },
      // { name: 'twitter:card', content: 'summary_large_image' },
      // { name: 'twitter:site', content: '@twitter_handle_goes_here' },
      // { name: 'twitter:creator', content: '@twitter_handle_goes_here' },
      // { name: 'twitter:title', content: '' },
      // { name: 'twitter:description', content: process.env.npm_package_description || '' },
      // { name: 'twitter:image', content: '' },      
      { 
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || ''
      },
      // { name: 'msapplication-TileColor', content:'#FFFFFF' },
      // { name: 'msapplication-TileImage', content:'mstile-144x144.png' },
      // { name: 'msapplication-square70x70logo', content:'mstile-70x70.png' },
      // { name: 'msapplication-square150x150logo', content:'mstile-150x150.png' },
      // { name: 'msapplication-wide310x150logo', content:'mstile-310x150.png' },
      // { name: 'msapplication-square310x310logo', content:'mstile-310x310.png' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      // { rel: 'apple-touch-icon-precomposed', sizes: '57x57', href: './apple-touch-icon-57x57.png' },
      // { rel: 'apple-touch-icon-precomposed', sizes: '114x114', href: './apple-touch-icon-114x114.png' },
      // { rel: 'apple-touch-icon-precomposed', sizes: '72x72', href: './apple-touch-icon-72x72.png' },
      // { rel: 'apple-touch-icon-precomposed', sizes: '144x144', href: './apple-touch-icon-144x144.png' },
      // { rel: 'apple-touch-icon-precomposed', sizes: '60x60', href: './apple-touch-icon-60x60.png' },
      // { rel: 'apple-touch-icon-precomposed', sizes: '120x120', href: './apple-touch-icon-120x120.png' },
      // { rel: 'apple-touch-icon-precomposed', sizes: '76x76', href: './apple-touch-icon-76x76.png' },
      // { rel: 'apple-touch-icon-precomposed', sizes: '152x152', href: './apple-touch-icon-152x152.png' },
      // { rel: 'icon', type: 'image/png', href: './favicon-196x196.png', sizes: '196x196' },
      // { rel: 'icon', type: 'image/png', href: './favicon-96x96.png', sizes: '96x96' },
      // { rel: 'icon', type: 'image/png', href: './favicon-32x32.png', sizes: '32x32' },
      // { rel: 'icon', type: 'image/png', href: './favicon-16x16.png', sizes: '16x16' },
      // { rel: 'icon', type: 'image/png', href: './favicon-128.png', sizes: '128x128' }
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
    '~/assets/styles/app.scss'
  ],
  /*
   ** Load SCSS into each component
   */
  styleResources: {
    scss: [
      '~/assets/styles/_variables.scss',
      '~/assets/styles/_mixins.scss'
    ]
  },  
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    // { src: '~/plugins/web-font-loader.client.js', mode: 'client' }
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    '@nuxtjs/style-resources',
  ],
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
      // Remove SVG from default Nuxt webpack rules
      const svgRule = config.module.rules.find(rule => rule.test.test('.svg'));

      svgRule.test = /\.(png|jpe?g|gif|webp)$/i

      // Use SVG loader for .svg files
      config.resolve.extensions.push('.svg')
      config.module.rules.push({
        test: /\.svg$/,
        use: [
          'babel-loader',
          {
            loader: "vue-svg-loader",
            options: {
              svgo: {
                plugins: [{ removeViewBox: false }]
              }
            }
          }
        ]
      })
    }
  }
}
