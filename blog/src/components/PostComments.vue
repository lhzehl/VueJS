<template>
  <div class="container">
    <div class="row post-comments">
      <div class="col-3">
        <div class="comment-author">
          <img
            class="author-image"
            :src="review.author.profile.image"
            :alt="review.author.username"
          />
          <h5>{{ review.author.username }}</h5>
        </div>
      </div>
      <div class="col-5"></div>
      <div class="comment-text ">
        <p class="text-center">{{ review.text }}</p>
      </div>
    </div>
    <div class="row comment-child">
      <div v-for="child in review.children" :key="child.date_published">
        <div class="comment-author">
          <img
            class="author-image"
            :src="child.author.profile.image"
            :alt="child.author.username"
          />
          <h5>{{ child.author.username }}</h5>
        </div>

        <p class="child-text">{{ child.text }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "PostComments",
  props: {
    review: {
      type: Object,
    },
  },
};
</script>

<style scoped>
.post-comments {
  border: 1px solid black;
  position: relative;
  background-color: rgb(199, 187, 206);
}
.comment-child {
  border: 2px solid black;
  position: relative;
  background-color: rgb(233, 212, 245);
  margin-left: 210px;
  width: 500px;
  border-radius: 20px;
}
.author-image {
  width: 100px;
  border-radius: 40px;
}
.text-center {
  text-align: center;
}
.comment-text {
  margin-left: 15px;
  text-align: center;
}
.child-text {
  position: absolute;
  top: 10px;
  right: 0px;
}
</style>
