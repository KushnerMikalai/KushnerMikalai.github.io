require('./assets/styles/normalize.css')
require('./assets/styles/nick-base.css')

import Vue from 'vue'
import App from './App'
import store from './store/index'
import router from './router'
import { sync } from 'vuex-router-sync'
import VueProgressBar from 'vue-progressbar'
import AnimateCss from 'animate.css'
import FSfont from './assets/fonts/SF/stylesheet.css'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import Icon from 'vue-awesome/components/Icon'
import VueMasonryPlugin from 'vue-masonry'

Vue.component('navbar', require('./components/Navbar.vue'))
Vue.config.productionTip = false

Vue.component('icon', Icon)
Vue.use(VueMasonryPlugin)
Vue.use(VueAwesomeSwiper)
Vue.use(AnimateCss)
Vue.use(FSfont)
Vue.use(VueProgressBar, {
  color: '#a948bc',
  failedColor: '#874b4b',
  thickness: '3px',
  transition: {
    speed: '0.6s',
    opacity: '0.2s',
    termination: 300
  }
})

sync(store, router)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
