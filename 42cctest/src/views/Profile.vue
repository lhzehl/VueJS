<template>
  <div class="profile">
    <router-link  class="btn" to="/login">Login</router-link >
    <ProfileItem v-if="Boolean(profile.id)" :profile="profile" />
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import ProfileItem from '@/components/ProfileItem'
export default {
  name: "Profile",
  components: {
    ProfileItem,
  },
  mounted() {
    this.fetchProfile();
    document.title = 'Profile'
  },
  computed:{
    ...mapGetters('profile', ['profile'])
  },
  methods: {
    ...mapActions("profile", ["fetchProfile"]),
  },
};
</script>
