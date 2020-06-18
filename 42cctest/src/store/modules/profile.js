import axios from "@/plugins/axios";
import mutations from "@/store/mutations";

const { PROFILE } = mutations;

const profileStore = {
  namespaced: true,
  state: {
    profile: {},
  },
  getters: {
    profile: ({ profile }) => profile,
  },
  mutations: {
    [PROFILE](state, value) {
      state.profile = value;
    },
  },
  actions: {
    async fetchProfile({ commit }) {
      try {
        //! id=1 for profile
        const response = await axios.get("/api/v1/profile/1/");
        console.log(response.data);
        commit(PROFILE, response.data);
      } catch (err) {
        console.log(err);
      }
    },
  },
};
export default profileStore;
