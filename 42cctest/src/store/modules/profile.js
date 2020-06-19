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
    async fetchUpdateProfile({ commit }, data) {
      const formData = new FormData();

      Object.keys(data).forEach((el) => {
        formData.append(el, data[el]);
      });
      try {
        const response = await axios.patch("/api/v1/profile/1/", formData);
        console.log(response.data)
        commit(PROFILE, response.data);

      } catch (err) {
        console.log(err);
        // console.log(commit);
      }
    },
  },
};
export default profileStore;
