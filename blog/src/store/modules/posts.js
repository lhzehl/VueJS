import axios from "@/plugins/axios";
import mutations from "@/store/mutations";

function serializeResponse(posts) {
  return posts.reduce((acc, post) => {
    acc[post.id] = post;
    return acc;
  }, {});
}

const { POSTS, POSTDETAIL } = mutations;

const postsStore = {
  namespaced: true,
  state: {
    postsPerPage: 5,
    currentPage: 1,
    posts: {},
    postDetail: {},
  },
  getters: {
    postsList: ({ posts }) => posts,
    postDetail: ({ postDetail }) => postDetail,
    // currentPage: ({ currentPage }) => currentPage,
  },
  mutations: {
    [POSTS](state, value) {
      state.posts = value;
    },
    [POSTDETAIL](state, value) {
      state.postDetail = value;
    },
  },
  actions: {
    initPostsStore: {
      handler({ dispatch }) {
        dispatch("fetchPosts");
      },
      root: true,
    },
    async fetchPosts({ commit }) {
      //   const { currentPage } = getters; context => { getters }
      try {
        const response = await axios.get("/api/v1/object/");
        const posts = serializeResponse(response.data);
        commit(POSTS, posts);
      } catch (err) {
        console.log(err);
      }
    },
    async fetchPostDetail({ commit }, id) {
      try {
        const response = await axios.get(`/api/v1/object/${id}`);
        const postDetail = response.data;
        commit(POSTDETAIL, postDetail);
      } catch (err) {
        console.log(err);
      }
    },
    async fetchNewPost({ commit }, data) {
      console.log(data, commit);
      try {
        const response = await axios.post("/api/v1/new/", JSON.stringify(data));
        console.log(response);
      } catch (err) {
        console.log(err);
      }
    },
  },
};

export default postsStore;
