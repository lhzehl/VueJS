<template>
  <div>
    <router-link  class="btn" to="/">Profile</router-link >
    <RequestM />
  </div>
</template>

<script>
import RequestM  from "@/components/RequestM";
export default {
name: "Request",
  props: {},
  components: {
    RequestM,
  },
}
</script>
