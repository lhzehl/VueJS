<template>
  <div>
    <BNavbar toggleable="lg" type="dark" class="navbar">
      <router-link to="/" class="nav-link">Django Blog</router-link>
      <router-link to="/About" class="nav-link">About</router-link>
    </BNavbar>
  </div>
</template>

<script>
export default {
  name: "NavBar",
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
