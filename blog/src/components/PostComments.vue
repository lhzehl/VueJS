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
    <b-button @click="show = !show">Comment</b-button>
    <b-form v-if="show" :key="review.date_published">
      <b-form-group id="input-group-1" label-for="input-1">
        <b-form-input
          id="input-1"
          v-model="comment"
          required
          placeholder="Enter your comment"
        ></b-form-input>
      </b-form-group>
      <b-button @click="onSubmit(review.id)" variant="primary">Submit</b-button>
    </b-form>

    <div v-for="child in review.children" :key="child.date_published">
      <div class="row comment-child">
        <div class="col-3">
          <div class="comment-author">
            <img
              class="author-image"
              :src="child.author.profile.image"
              :alt="child.author.username"
            />
            <h5>{{ child.author.username }}</h5>
          </div>
        </div>
        <div class="col-5"></div>
        <div class="comment-text ">
          <p class="text-center">{{ child.text }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "PostComments",
  props: {
    review: {
      type: Object,
    },
    mid: {
      type: Number,
    },
  },
  data: () => ({
    comment: "",

    show: false,
  }),
  methods: {
    ...mapActions("posts", ["fetchNewComment"]),
    onSubmit(id) {
      // alert(this.commentP);
      const data = {
        text: this.comment,
        parent: id,
        main_object: this.mid,
      };
      this.fetchNewComment(data);
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
  margin-left: 15px;
  max-width: 90%;
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
</style>
