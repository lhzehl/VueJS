<template>
  <div>
    <b-card no-body class="overflow-hidden">
      <b-row no-gutters>
        <b-col md="6">
          <b-card-img
            :src="post.image"
            alt="Image"
            class="rounded-0 list-image"
          ></b-card-img>
        </b-col>
        <b-col md="6">
          <b-card-body :title="post.name">
            <b-card-text>
              {{ post.about }}
            </b-card-text>
          </b-card-body>
          <BButton class="view-more" @click="viewPostDetail(post.id)"
            >View More</BButton
          >
        </b-col>
      </b-row>
    </b-card>
  </div>
</template>

<script>
export default {
  name: "PostListItem",
  props: {
    post: {
      type: Object,
      required: true,
    },
  },
  data: () => ({
    loading: false,
    selection: 1,
  }),
  computed: {
    getImage() {
      return this.post.image;
    },
  },
  methods: {
    viewPostDetail(id) {
      this.$router.push(`post/${id}`);
    },
  },
};
</script>

<style scoped>
.list-image {
  width: 270px;
  height: 300px;
}
.view-more {
  position: absolute;
  right: 75px;
  bottom: 10px;
}
.vtflist {
  margin-bottom: 3px;
}
</style>
