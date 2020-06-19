<template>
  <div>
    <b-form-group
        id="input-group-1"
        label="username:"
        label-for="input-1"

      >
        <b-form-input
          id="input-1"
          v-model="username"
          required
          placeholder="Enter username"
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-2" label="password:" label-for="input-2">
        <b-form-input
          id="input-2"
          type="password"
          v-model="password"
          required
          placeholder="Enter password"
        ></b-form-input>
      </b-form-group>
      <b-button variant="primary" @click.prevent="login" >Login</b-button>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "LogInForm",
  data: () => ({
    username: "",
    password: "",
  }),
  methods: {
    ...mapActions("auth", ["fetchLogin"]),
    login() {

      const authData = {
        password: this.password,
        username: this.username,
      };
      this.fetchLogin(authData);
    },
  },
};
</script>

<style scoped></style>
