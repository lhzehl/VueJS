<template>
  <BContainer>
    <h3 class="list-title">Post List</h3>
    <BRow>
      <template v-if="isExist">
        <div class="mt-4" v-for="post in list" :key="post.id">
          <PostListItem :post="post" class="post-list-item"/>
        </div>
      </template>
    </BRow>
  </BContainer>
</template>

<script>
import PostListItem from "@/components/PostListItem";
export default {
  name: "PostsList",
  components: {
    PostListItem,
  },
  props: {
    list: {
      type: Object,
      default: () => ({}),
    },
  },
  computed: {
    isExist() {
      return Boolean(Object.keys(this.list).length);
    },
  },
};
</script>

<style scoped>
.list-title {
  font-size: 55px;
  margin-bottom: 5px;
  color: cornsilk;
}
.post-list-item {
  width: 540px;
  max-height: 400px;
  position: relative;
}
</style>
