<template>
  <div>
    
    <div class="container">
      <h3>username: {{ authUser.username }}</h3>
      <img :src="userProfile.image" />
      <h4>Name :{{ userProfile.name }}</h4>
      <h6>email: {{ authUser.email || "hidden" }}</h6>
      <span>info: {{ userProfile.about }}</span
      ><br />
      <span>dob: {{ localeDate }} </span>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  name: "AuthProfile",

  mounted() {
    this.fetchProfile();
  },
  computed: {
    ...mapGetters("profile", ["userProfile", "authUser"]),
    localeDate() {
      return new Date(this.userProfile.dob).toLocaleDateString();
    },
  },
  methods: {
    ...mapActions("profile", ["fetchProfile"]),
  },
};
</script>

<style scoped></style>
