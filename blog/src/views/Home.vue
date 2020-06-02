<template>
  <div class="home">
    <PostsList :list="postsList" />
  </div>
</template>

<script>
// @ is an alias to /src
import { mapActions, mapGetters } from "vuex";
import PostsList from "@/components/PostsList";

export default {
  name: "Home",
  components: {
    PostsList
  },
  mounted() {
    // this.fetchPosts();
  },
  computed: {
    ...mapGetters("posts", ["postsList"])
  },
  methods: {
    ...mapActions("posts", ["fetchPosts"])
  }
};
</script>

<style>
.home {
  color: #2c3e50;
}
</style>
