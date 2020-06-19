import axios from "@/plugins/axios";
import router from "@/router";
import mutations from "@/store/mutations";

const { ISAUTH } = mutations;

const authStore = {
  namespaced: true,
  state: {
    authData: {},
    isLogin: Boolean(localStorage.getItem("token-42cctest")),
  },
  getters: {
    isLogin: ({ isLogin }) => isLogin,
  },
  mutations: {
    [ISAUTH](state, value) {
      state.isLogin = value;
    },
  },
  actions: {
    async fetchLogin({ commit }, authData) {

      console.log(JSON.stringify(authData));
      const formData = new FormData();

      Object.keys(authData).forEach((el) => {
        formData.append(el, authData[el]);
      });

      try {
        const response = await axios.post(
          "/auth/token/login", formData

        );
        console.log(response)
        localStorage.setItem(
          "token-42cctest",
          JSON.stringify(response.data.auth_token).slice(1, -1)
        );
        commit(ISAUTH, true);
        router.push("profile");
      } catch (err) {
        console.log(err);
      }
    },
  },
};

export default authStore;
