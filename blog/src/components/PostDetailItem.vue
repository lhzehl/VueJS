<template>
  <div>
    <main id="main">
      <section class="standart-section post-body">
        <div class="container">
          <h3 class="post-title text-center">{{ post.name }}</h3>
          <div class="row">
            <div class="col-4">
              <div class="post-image">
                <h5 class="post-author">author: {{ post.author.username }}</h5>
                <img :src="post.image" :alt="post.name" class="img" />

                <h6 class="post-datepub">{{ localeDate }}</h6>
              </div>
            </div>
            <div class="col-6">
              <div class="post-text">
                <p>{{ post.description }}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>

    <div v-for="review in post.reviews" :key="review.date_published">
      <PostComments :review="review" />
    </div>
  </div>
</template>

<script>
import PostComments from "@/components/PostComments";
export default {
  name: "PostDetailItem",
  components: {
    PostComments,
  },
  props: {
    post: {
      type: Object,
    },
  },
  computed: {
    localeDate() {
      return new Date(this.post.date_published).toLocaleDateString();
    },
  },
};
</script>

<style scoped>
.row {
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
  border: 2px solid black;
  border-radius: 22px;
}
</style>
