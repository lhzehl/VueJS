<template>
  <div class="container">
    <button class="btn btn-success" v-if="isLogin">Edit</button>
    <router-link v-else class="btn btn-primary" to="/login">Login</router-link>
    <div class="row">
      <div class="col-6">
        <p>{{ profile.name }}</p>
        <p>{{ profile.last_name }}</p>
        <p>{{ localeDate }}</p>
        <p>Photo:</p>
        <img class="profile-image" :src="profile.photo" />
      </div>
      <div class="col-6">
        <p>Contacts</p>
        <p>Email: {{ profile.c_mail }}</p>
        <p>Jabber: {{ profile.jabber }}</p>
        <p>Skype: {{ profile.skype }}</p>
        <p>Other contacts:</p>
        <p>{{ profile.other_contacts }}</p>

        <p>Bio:</p>
        <p>{{ profile.bio }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "ProfileItem",
  props: {
    profile: {
      type: Object,
      required: true,
    },
  },
  data: () => ({
    form: {
      name: profile.name,
      last_name: profile.last_name,
      dob: profile.dob,
      photo:null,
      c_mail:profile.c_mail,
      jabber:profile.jabber,
      skype:profile.skype,
      other_contacts:profile.other_contacts
    },
  }),
  computed: {
    ...mapGetters("auth", ["isLogin"]),
    localeDate() {
      return new Date(this.profile.dob).toLocaleDateString();
    },
  },
  methods:{
    
  }
};
</script>

<style scoped>
.profile-image {
  width: 200px;
  height: 200px;
  border: 2px solid black;
}
</style>
