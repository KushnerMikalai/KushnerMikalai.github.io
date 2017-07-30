import Vue from 'vue'
import Vuex from 'vuex'
import works from './works'
import technologies from './technologies'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    works,
    technologies
  }
})
