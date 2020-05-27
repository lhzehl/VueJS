import Vue from "vue";

const itemsStore = {
  namespaced: true,
  state: {
    list: {
      1: {
        type: "INCOME",
        value: 100,
        comment: "Some comment",
        id: 1,
      },
      2: {
        type: "UOTCOME",
        value: -50,
        comment: "Some outcome comment",
        id: 2,
      },
    },
  },
  getters: {
    itemsList: ({ list }) => Object.values(list),
  },
  mutations: {
    ADD_ITEM(state, item) {
      Vue.set(state.list, item.id, item);
    },
    DELL_ITEM(state, item) {
      Vue.delete(state.list, item);
    },
  },
  actions: {
    addNewItem({ commit }, item) {
      const newItem = { ...item, id: String(Math.random()) };
      commit("ADD_ITEM", newItem);
    },
    deleteItem({ commit }, item) {
      commit("DELL_ITEM", item);
    },
  },
};

export default itemsStore;
