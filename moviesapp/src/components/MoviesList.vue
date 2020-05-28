<template>
  <BContainer>
    <h3 class="list-title">{{listTitle}}</h3>
    <BRow>
      <template v-if="isExist">
        <BCol cols="3" v-for="(movie, key) in list" :key="key">
          <MovieItem
            :movie="movie"
            @mouseover.native="onMouserOver(movie.Poster)"
            @removeItem="onRemoveItem"
          />
        </BCol>
      </template>
      <template v-else><div>Empty list</div></template>
    </BRow>
  </BContainer>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
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
  methods: {
    ...mapActions("movies", ["removeMovie"]),
    onMouserOver(poster) {
      this.$emit("changeBg", poster);
    },
    async onRemoveItem({ id, title }) {
      const isConfirmed = await this.$bvModal.msgBoxConfirm(
        `Are you sure delete ${title}?`
      );
      if (isConfirmed) this.removeMovie(id);
      console.log(isConfirmed);
    },
  },
  computed: {
    ...mapGetters("movies", ["isSearch"]),
    isExist() {
      return !!Object.keys(this.list).length;
    },
    listTitle(){
      return this.isSearch ? "Search result": "IMDB Top 250"
    }
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
