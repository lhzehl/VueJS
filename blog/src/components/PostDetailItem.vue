<template>
  <div>
    <main id="main">
      <section class="standart-section post-body">
        <div class="container">
          <h3 class="post-title text-center">{{ post.name }}</h3>
          <div class="row row-post">
            <div class="col-4">
              <div class="post-image">
                <h5 class="post-author">author: {{ username }}</h5>
                <h6 class="post-datepub">{{ localeDate }}</h6>
                <img :src="post.image" :alt="post.name" class="img" />
              </div>
            </div>

            <div class="col-6">
              <div class="post-text" v-html="post.description"></div>
            </div>
          </div>




        </div>

<div class="container">
  <div class="row">
<div class="col-12">
      <b-button @click="show = !show">Comment</b-button>
    <b-form v-if="show" :key="post.date_published">
      <b-form-group id="input-group-1" label-for="input-1">
        <b-form-input
          id="input-1"
          v-model="comment"
          required
          placeholder="Enter your comment"
        ></b-form-input>
      </b-form-group>
      <b-button @click="onSubmit()" variant="primary">Submit</b-button>
    </b-form>
</div>
</div>
</div>
      </section>
    </main>


    <div v-for="review in post.reviews" :key="review.date_published">
      <PostComments :review="review" :mid="post.id" />
    </div>
  </div>
</template>

<script>
import PostComments from "@/components/PostComments";
import { mapActions } from "vuex";
export default {
  name: "PostDetailItem",
  data: () => ({
    comment: "",
    show: false,
  }),
  components: {
    PostComments,
  },
  props: {
    post: {
      type: Object,
      required: true,
    },
  },
  computed: {
    localeDate() {
      return new Date(this.post.date_published).toLocaleDateString();
    },

    username() {
      return this.post.author.username;
    },
  },
  methods: {
    ...mapActions("posts", ["fetchNewComment"]),
    onSubmit() {
      // alert(this.commentP);
      const data = {
        text: this.comment,
        main_object: this.post.id,
      };
      this.fetchNewComment(data);
    },
  },
};
</script>

<style scoped>
.row-post {
  background-color: rgb(199, 187, 206);
}
/* .standart-section {
  padding: 80px 0;
} */
.post-title {
  font-weight: 900;
  text-transform: uppercase;
  color: aliceblue;
  margin-bottom: 75px;
  font-style: 30px;
}
/* .container {
  max-width: 1170px;
  margin: auto;
  padding: 0 15px;
} */
.d-flex {
  display: flex;
}
.align-item-center {
  align-items: center;
}
.post-text {
  margin-left: 25px;
  text-align: center;
}
.text-center {
  text-align: center;
}
.justify-content-between {
  justify-content: space-between;
}
.img {
  max-width: 600px;
  max-height: 800px;
  border: 2px solid black;
  border-radius: 22px;
}
</style>
