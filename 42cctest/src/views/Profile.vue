<template>
  <div class="profile">


    <ProfileItem v-if="Boolean(profile.id)" :profile="profile" />
    <router-link class="btn btn-warning" to="/requests">Request</router-link>
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
    ...mapGetters('profile', ['profile']),

  },
  methods: {
    ...mapActions("profile", ["fetchProfile"]),
  },
};
</script>
