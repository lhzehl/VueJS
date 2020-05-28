import IDs from "@/store/mock/imdb_250";
import axios from "@/plugins/axios";
import mutations from "@/store/mutations";

function serializeRespons(movies) {
  return movies.reduce((acc, item) => {
    acc[item.imdbID] = item;

    return acc;
  }, {});
}

const { MOVIES, CURRENT_PAGE } = mutations;

const moviesStore = {
  namespaced: true,
  state: {
    top250IDs: IDs,
    moviesPerPage: 12,
    currentPage: 1,
    movies: {},
  },
  getters: {
    moviesList: ({ movies }) => movies,
    slicedIDs: ({ top250IDs }) => (from, to) => top250IDs.slice(from, to),

    currentPage: ({ currentPage }) => currentPage,
    moviesPerPage: ({ moviesPerPage }) => moviesPerPage,
    moviesLength: ({ top250IDs }) => Object.keys(top250IDs).length,
  },
  mutations: {
    [MOVIES](state, value) {
      state.movies = value;
    },
    [CURRENT_PAGE](state, value) {
      state.currentPage = value;
    },
  },
  actions: {
    initMoviesStore: {
      //context => dispatch
      handler({ dispatch }) {
        dispatch("fetchMovies");
      },
      root: true,
    },

    async fetchMovies({ getters, commit, dispatch }) {
      //context => getters
      try {
        dispatch("toggleLoader", true, { root: true });
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
      } finally {
        dispatch("toggleLoader", false, { root: true });
      }
    },
    changeCurrentPage({ commit, dispatch }, page) {
      commit(CURRENT_PAGE, page);
      dispatch("fetchMovies");
    },
  },
};
export default moviesStore;
