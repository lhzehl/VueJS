import Vue from "vue";
import Vuex from "vuex";
import profile from './modules/profile'
import requests from './modules/requests'
import auth from './modules/auth'


Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    profile,
    requests,
    auth
  }
});
