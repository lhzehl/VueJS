<template>
  <div class="mt-4">
    <PostDetailItem v-if="Boolean(postDetail.author)" :post="postDetail" />
    <div v-else></div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import PostDetailItem from "@/components/PostDetailItem";
export default {
  name: "PostDetail",
  components: {
    PostDetailItem,
  },
  props: {
    id: {
      type: Number,
    },
  },
  watch: {
    "$route.params": {
      handler: "onPostParamsChange",
      immediate: true,
      depp: true,
    },
  },

  // mounted() {
  //   this.fetchPostDetail(this.id);
  // },
  // updated() {
  //   this.fetchPostDetail(this.id);
  // },
  methods: {
    ...mapActions("posts", ["fetchPostDetail"]),
    onPostParamsChange({ id = this.id } = {}) {
      this.fetchPostDetail(Number(id));
    },
  },
  computed: {
    ...mapGetters("posts", ["postDetail"]),
  },
};
</script>

<style scoped></style>
