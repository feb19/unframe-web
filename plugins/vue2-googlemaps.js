import Vue from 'vue'
import * as VueGoogleMaps from 'vue2-google-maps' //'~/node_modules/vue2-google-maps/src/main'

// require('babel-polyfill')

Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyCjrzcRsK0N8WrWBqvmukjmS_Ip3lZQNcg'
  }
})

