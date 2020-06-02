import Vue from "vue";
import Vuex from "vuex";
import posts from "./modules/posts";

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    posts,
  },
});

store.dispatch('initPostsStore')

export default store;
