// jshint esversion: 6

import Vue from 'vue';
import App from './App';
import Vuex from 'vuex';

import VueRouter from 'vue-router';
import VueResource from 'vue-resource';

Vue.use(VueResource);
Vue.use(Vuex);
// Vue.use(VueRouter);

// const routes = [
//   { path: '/', component: HostsList }
// ];
//
// const router = new VueRouter({
//   routes // short for routes: routes
// });

new Vue({
  el: '#app',
  template: '<App/>',
  components: { App }
});
