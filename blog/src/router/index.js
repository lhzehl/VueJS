import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import PostDetail from "../views/PostDetail";
import Authorization from "@/views/Authorization";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/post/:id",
    name: "PostDetail",
    component: PostDetail,
    props: true,
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
  {
    path: "/authorization",
    name: "Authorization",
    component: Authorization,
  },
];

const router = new VueRouter({
  routes,
});

export default router;
