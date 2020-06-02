<template>
  <div class="mt-4">
    <PostDetailItem :post="postDetail" />
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import PostDetailItem from "@/components/PostDetailItem";
export default {
  name: "PostDetail",
  components: {
    PostDetailItem
  },
  props: {
    id: {
      type: Number
    }
  },
  data: () => ({
    post: {}
  }),
  mounted() {
    this.fetchPostDetail(this.id);
  },
  updated() {
    this.fetchPostDetail(this.id);
  },
  methods: {
    ...mapActions("posts", ["fetchPostDetail"]),
    onChangePostId({ id = 1 }) {
      this.id = id;
    }
  },
  computed: {
    ...mapGetters("posts", ["postDetail"])
  }
};
</script>

<style scoped></style>
