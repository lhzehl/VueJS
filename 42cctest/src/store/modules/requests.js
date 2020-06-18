import axios from "@/plugins/axios";
import mutations from "@/store/mutations";



function serializeResponse(requests) {
  return requests.reduce((acc, requests) => {
    acc[requests.date_add] = requests;
    return acc;
  }, {});
}



const { REQUESTS } = mutations;

const requestsStore = {
  namespaced: true,
  state: {
    requests: {},
  },
  getters: {
    objectOfRequests: ({ requests }) => requests,
  },
  mutations: {
    [REQUESTS](state, value) {
      state.requests = value;
    },
  },
  actions: {
    async fetchRequests({ commit }) {

      try {
        const response = await axios.get("/api/v1/req/");
        // console.log(response.data.results);
        const requestsList = response.data.results
        const serializedRequests = serializeResponse(requestsList)
        // console.log(serializedRequests)
        commit(REQUESTS, serializedRequests)
      } catch (err) {
        console.log(err);
      }
    },
  },
};
export default requestsStore;
