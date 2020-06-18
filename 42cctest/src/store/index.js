import Vue from "vue";
import Vuex from "vuex";
import profile from './modules/profile'
import requests from './modules/requests'
import login from './modules/login'

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    profile,
    requests,
    login
  }
});
