// jshint esversion: 6

import Vue from 'vue';
import App from './App';
import Vuex from 'vuex';

import VueRouter from 'vue-router';
import VueResource from 'vue-resource';

Vue.use(VueResource);
Vue.use(Vuex);

new Vue({
  el: '#app',
  template: '<App/>',
  components: { App }
});
