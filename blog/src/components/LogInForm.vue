<template>
  <div>
    <v-app id="inspire">
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
                      <!-- <template v-slot:activator="{ on }">
                        <v-btn
                          :href="source"
                          icon
                          large
                          target="_blank"
                          v-on="on"
                        >
                          <v-icon>mdi-code-tags</v-icon>
                        </v-btn>
                      </template>
                      <span>Source</span> -->
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
    </v-app>
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
