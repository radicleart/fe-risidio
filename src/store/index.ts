import Vue from 'vue'
import Vuex from 'vuex'
import contentStore from './contentStore'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    windims: { innerWidth: window.innerWidth, innerHeight: window.innerHeight }
  },
  getters: {
    getSectionHeight: state => {
      return (state.windims.innerHeight - 100)
    }
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    contentStore
  }
})
