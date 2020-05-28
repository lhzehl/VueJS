import IDs from "@/store/mock/imdb_250";
import axios from "@/plugins/axios";
import mutations from "@/store/mutations";

function serializeRespons(movies) {
  return movies.reduce((acc, item) => {
    acc[item.imdbID] = item;

    return acc;
  }, {});
}

const { MOVIES } = mutations;

const moviesStore = {
  namespaced: true,
  state: {
    top250IDs: IDs,
    moviesPerPage: 12,
    currentPage: 1,
    movies: {},
  },
  getters: {
    slicedIDs: ({ top250IDs }) => (from, to) => top250IDs.slice(from, to),

    currentPage: ({ currentPage }) => currentPage,
    moviesPerPage: ({ moviesPerPage }) => moviesPerPage,
  },
  mutations: {
    [MOVIES](state, value) {
      state.movies = value;
    },
  },
  actions: {
    async fetchMovies({ getters, commit }) {
      //context => getters
      try {
        const { currentPage, moviesPerPage, slicedIDs } = getters;

        const from = currentPage * moviesPerPage - moviesPerPage;

        const to = currentPage * moviesPerPage;
        const moviesToFetch = slicedIDs(from, to);

        const requests = moviesToFetch.map((id) => axios.get(`/?i=${id}`));

        const response = await Promise.all(requests);
        const movies = serializeRespons(response);

        commit(MOVIES, movies);
      } catch (err) {
        console.log(err);
      }
    },
  },
};
export default moviesStore;
