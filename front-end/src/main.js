import Vue from 'vue'
import App from './App'

import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import HostsList from 'components/HostsList.vue'

Vue.use(VueResource)
Vue.use(VueRouter)

const routes = [
  { path: '/', component: HostsList }
]

const router = new VueRouter({
  routes // short for routes: routes
})

new Vue({
  el: '#app',
  render: h => h(App),
  router
})
