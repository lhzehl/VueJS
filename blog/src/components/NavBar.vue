<template>
  <div>
    <BNavbar toggleable="lg" type="dark" class="navbar">
      <router-link to="/" class="nav-link">Django Blog</router-link>
      <template v-if="isLogin"
        >
        <router-link to="/createpost" class="nav-link"
          >Add New Post</router-link
        >
        <router-link to="/profile" class="nav-link"
          >Profile</router-link
        ></template
      >

      <router-link v-else to="/authorization" class="nav-link"
        >LogIn</router-link
      >
    </BNavbar>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "NavBar",
  computed: {
    ...mapGetters("auth", ["isLogin"]),
  },
};
</script>

<style scoped>
.navbar {
  background-color: darkslateblue;
}
.nav-link {
  color: azure;
}
</style>
