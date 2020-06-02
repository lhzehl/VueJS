<template>
  <div>{{ post}}</div>
</template>

<script>
export default {
  name: "PostDetailItem",
  props: {
    post: {
      type: Object,
    },
  },
};
</script>

<style scoped></style>
