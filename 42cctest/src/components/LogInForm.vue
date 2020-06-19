<template>
  <div>
    <!-- <v-app id="inspire">
      <v-app id="inspire">
        <v-content>
          <v-container class="fill-height" fluid>
            <v-row align="center" justify="center">
              <v-col cols="12" sm="8" md="4">
                <v-card class="elevation-12">
                  <v-toolbar color="primary" dark flat>
                    <v-toolbar-title>Login form</v-toolbar-title>
                    <v-spacer></v-spacer>
                    <v-tooltip bottom>

                    </v-tooltip>
                  </v-toolbar>
                  <v-card-text>
                    <v-form>
                      <v-text-field
                        v-model="username"
                        label="username"
                        name="username"
                        prepend-icon="mdi-account"
                        type="text"
                      ></v-text-field>

                      <v-text-field
                        v-model="password"
                        id="password"
                        label="Password"
                        name="password"
                        prepend-icon="mdi-lock"
                        type="password"
                      ></v-text-field>
                    </v-form>
                  </v-card-text>
                  <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn color="primary" @click.prevent="login">Login</v-btn>
                  </v-card-actions>
                </v-card>
              </v-col>
            </v-row>
          </v-container>
        </v-content>
      </v-app>
    </v-app> -->
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
      // this.$store.dispatch("auth_token", {

      // });
      const authData = {
        password: this.password,
        username: this.username,
      };
      // console.log(authData)
      this.fetchLogin(authData);
    },
  },
};
</script>

<style scoped></style>
