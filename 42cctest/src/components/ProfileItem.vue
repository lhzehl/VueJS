<template>
  <div class="container">
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
export default {
  name: "ProfileItem",
  props: {
    profile: {
      type: Object,
      required: true,
    },
    
  },
  computed:{
        localeDate() {
      return new Date(this.profile.dob).toLocaleDateString();
    },
  },
};
</script>

<style scoped>
.profile-image {
  width: 200px;
  height: 200px;
  border: 2px solid black;
}
</style>
