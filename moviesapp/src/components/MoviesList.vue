<template>
  <BContainer>
    <h3 class="list-title">IMDB Top 250</h3>
    <BRow>
      <template v-if="isExist">
        <BCol cols="3" v-for="(movie, key) in list" :key="key">
          <MovieItem :movie="movie" @mouseover.native="onMouserOver(movie.Poster)"/>
        </BCol>
      </template>
      <template v-else><div>Empty list</div></template>
    </BRow>
  </BContainer>
</template>

<script>
import MovieItem from "./MovieItem";
export default {
  name: "MoviesList",
  props: {
    list: {
      type: Object,
      default: () => ({}),
    },
  },
  components: {
    MovieItem,
  },
  methods:{
      onMouserOver(poster){
          this.$emit("changeBg", poster)
      }
  },
  computed: {
    isExist() {
      return !!Object.keys(this.list).length;
    },
  },
};
</script>

<style scoped>
.list-title {
    color: #fff;
  font-size: 50px;
  margin-bottom: 30px;
}
</style>
