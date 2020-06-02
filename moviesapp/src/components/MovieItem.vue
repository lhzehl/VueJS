<template>
  <div class="movie-item mb-3">
    <div :style="posterBg" class="movie-item-poster"></div>
    <div class="movie-info-wrap d-flex flex-column justify-content-between">
      <div class="movie-item-info">
        <h3 class="movie-title">{{ movie.Title }}</h3>
        <span class="movie-year">{{ movie.Year }}</span>
      </div>
      <div class="movie-item-controls row no-gutters">
        <div class="col">
          <BButton size="md" block variant="outline-light">Edit</BButton>
        </div>
        <div class="col">
          <BButton
            size="md"
            block
            variant="outline-light"
            @click="emitRemoveEvent"
            >Remove</BButton
          >
        </div>
      </div>
    </div>
  </div>
  <!-- <div>Movie {{ movie.Title }}</div> -->
</template>

<script>
export default {
  name: "MovieItem",
  props: {
    movie: {
      type: Object,
      required: true,
    },
  },
  computed: {
    posterBg() {
      return {
        "background-image": `url(${this.movie.Poster})`,
      };
    },
  },
  methods: {
    emitRemoveEvent() {
      this.$emit("removeItem", {
        id: this.movie.imdbID,
        title: this.movie.Title,
      });
    },
  },
};
</script>

<style scoped>
.movie-item {
  position: relative;
  cursor: pointer;
  border-radius: 5px;
  overflow: hidden;
  transition: all 0.2s ease;
  height: 400px;
}

.movie-item:hover {
  box-shadow: 0px 5px 30px rgba(0, 0, 0, 0.7);
  transform: scale(1.02);
}

.movie-item-poster {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  z-index: -1;
}
.movie-info-wrap {
  padding: 10px;
  height: 100%;
  opacity: 0;
  transition: all 0.2s ease;
  /* display: flex;
  flex-direction: column;

  justify-content: space-between; */
}
.movie-item:hover .movie-info-wrap {
  opacity: 1;
  background-color: rgba(0, 0, 0, 0.4);
}
.movie-title {
  font-size: 18px;

  color: #ffffff;
}
.movie-year {
  font-size: 18px;
  color: #ffffff;
}
</style>
