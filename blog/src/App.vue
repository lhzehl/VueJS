<template>
  <div id="app">
    <NavBar />

    <router-view />
  </div>
</template>

<script>
import NavBar from "@/components/NavBar";

export default {
  name: "app",
  components: {
    NavBar,
  },
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-image: linear-gradient(
    45deg,
    rgb(0, 3, 38) 0%,
    rgba(66, 12, 16, 0.322) 100%
  );
  text-align: center;
  min-height: 1000px;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
