import Vuex from 'vuex'
import Vue from 'vue'

Vue.use(Vuex)

var store = new Vuex.Store({
  state: {
    currentHosts: '',
    hostState: 'basic'
  },
  mutations: {
    setCurrentHosts (state, hosts) {
      state.currentHosts = hosts
    },
    setHostState (state, hostState) {
      state.hostState = hostState
    }
  }
})

export default store
