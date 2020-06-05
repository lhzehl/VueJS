import axios from "@/plugins/axios";
import mutations from "@/store/mutations";
import router from "@/router";

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
      // console.log(data, commit);
      const formData = new FormData();

      Object.keys(data).forEach((el) => {
        formData.append(el, data[el]);
      });
      // formData.append("name", data.name);
      // formData.append("about", data.about);
      // formData.append("description", data.description);
      // formData.append("image", data.image);
      // formData.append("category", data.category);
      // formData.append("country", data.country);
      // formData.append("tag", data.tag);
      // formData.append("draft", data.draft);

      try {
        const response = await axios.post("/api/v1/new/", formData); //JSON.stringify(data)
        const id = response.data.id;
        router.push(`/post/${id}`);
      } catch (err) {
        console.log(err);
        console.log(commit);
      }
    },
    async fetchNewComment({ commit }, data) {
      const formData = new FormData();

      Object.keys(data).forEach((el) => {
        formData.append(el, data[el]);
      });

      try {
        const response = await axios.post("/api/v1/review/", formData);
        const mO = Number(response.data.main_object);
        const newResponse = await axios.get(`/api/v1/object/${mO}`);
        const postDetail = newResponse.data;

        commit(POSTDETAIL, postDetail);

      } catch (err) {
        console.log(err);

      }
    },
  },
};

export default postsStore;
