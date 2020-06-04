import axios from "@/plugins/axios";
import router from "@/router";
import mutations from "@/store/mutations";

const { USER, PROFILE } = mutations;

const profileStore = {
  namespaced: true,
  state: {
    authUser: {},
    userProfile: {},
    
  },
  getters: {
    userProfile: ({ userProfile }) => userProfile,
    authUser: ({ authUser }) => authUser,
    
  },
  mutations: {
    [PROFILE](state, value) {
      state.userProfile = value;
    },
    [USER](state, value) {
      state.authUser = value;
    },

  },
  actions: {
    async fetchProfile({ commit }) {
      try {
        const responce = await axios.get("/auth/users/me/");
        const user = responce.data;
        
        commit(USER, user);

        const responceProfile = await axios.get(`/api/v1/users/${user.id}`);
        commit(PROFILE, responceProfile.data);
      } catch {
        router.push("authorization");
      }
    },
  },
};

export default profileStore;
