<template>
  <div class="mt-4">
      <PostDetailItem :post="postDetail"/>
    <!-- <h4>Left and Right (or Start and End)</h4>
    <b-card
      img-src="https://placekitten.com/300/300"
      img-alt="Card image"
      img-left
      class="mb-3"
    >
      <b-card-text>
        {{ post.name }}
      </b-card-text> -->
    <!-- </b-card> -->
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
  data: () => ({
    post: {},
  }),
    mounted() {
    this.fetchPostDetail(this.id);
  },
  methods: {
    ...mapActions("posts", ["fetchPostDetail"]),
  },
  computed: {
    ...mapGetters("posts", ["postDetail"]),
  },
};
</script>

<style scoped></style>
