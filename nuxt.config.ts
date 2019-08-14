import NuxtConfiguration from '@nuxt/config'
import { MetaInfo } from 'vue-meta';

const dynamicRoutes = function() {
  const json = require('./static/works.json')
  let routes: string[] = []
  json.works.map(work => {
    routes.push(`/works/${work.id}`)
  })
  return routes
}

const meta: MetaInfo = {
  script: [
    // { src: 'https://maps.googleapis.com/maps/api/js?key=AIzaSyCjrzcRsK0N8WrWBqvmukjmS_Ip3lZQNcg', type: "text/javascript" }
  ],
  title: 'unframe exhibitions',
  meta: [
    { charset: 'utf-8' },
    { author: 'unframe' },
    { httpEquiv: 'X-UA-Compatible', content: 'IE=Edge' },
    { name: 'apple-mobile-web-app-capable', content: 'yes' },
    { name: 'apple-mobile-web-app-status-bar-style', content: 'black' },
    { name: 'format-detection', content: 'telephone=no' },
    { name: 'keywords', content: 'unframe, exhibition, design, engineer, programing, デザイン, 映像, プログラミング, インスタレーション, 展示' },
    { name: 'viewport', content: 'width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no' },

    { name: 'apple-mobile-web-app-capable', content: 'yes' },
    { name: 'apple-mobile-web-app-status-bar-style', content: 'black' },
    { name: 'apple-mobile-web-app-title', content: 'unframe' },
    { name: 'msapplication-TileImage', content: '/favicons/apple-touch-icon-180x180.png' },
    { name: 'msapplication-TileColor', content: '#000000' },
    { hid: 'og:image', property: 'og:image', content: 'https://unframe.jp/ogp.jpg' },
    { hid: 'twitter:image', property: 'twitter:image', content: 'https://unframe.jp/ogp.jpg' },
    { hid: 'twitter:card', property: 'twitter:card', content: 'summary' },
    { hid: 'twitter:title', property: 'twitter:title', content: 'unframe exhibitions' }
  ],
  link: [
    { rel: 'shortcut icon', href: '/favicons/favicon.ico' },
    { rel: 'icon', href: '/favicons/favicon.ico' },
    { rel: "manifest", href: "/favicons/manifest.json" }

  ]
}
const config: NuxtConfiguration = {
  head: meta,
  plugins: [
    { src: '~/plugins/vue2-googlemaps.js', ssr: true },
    { src: '~/plugins/ga.js', ssr: false },
  ],
  build: {
    transpile: [/^vue2-google-maps($|\/)/]
  },
  generate: {
    routes: dynamicRoutes
  }
}

export default config