<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <div class="d-flex align-center">
        <v-img
          alt="Hamster Wheel"
          class="shrink mr-2"
          contain
          src="https://www.shareicon.net/data/128x128/2016/08/18/815504_hamster_512x512.png"
          transition="scale-transition"
          width="40"
        />
      </div>
      <div id="nav">
        <router-link to="/">
          <span class="h6 font-weight-bold">Home</span>
        </router-link>
        <span id="menuSpacer" class="h6 font-weight-bold">|</span>
        <router-link to="/about">
          <span class="h6 font-weight-bold">About</span>
        </router-link>
      </div>

      <v-spacer></v-spacer>

      <v-btn v-if="!authenticated" @click="login()">
        <span class="mr-2" style="color: white;">Log In</span>
      </v-btn>

      <v-btn v-if="authenticated" @click="privateMessage()">
        <span class="mr-2" style="color: white;">Call Private</span>
      </v-btn>

      <v-btn v-if="authenticated" @click="logout()">
        <span class="mr-2" style="color: white;">Log Out</span>
      </v-btn>
      <br />
    </v-app-bar>

    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
import AuthService from "./auth/AuthService";
import axios from "axios";

const API_URL = "http://localhost:8000";
const auth = new AuthService();

export default {
  name: "App",
  data() {
    this.handleAuthentication();
    this.authenticated = false;

    auth.authNotifier.on("authChange", authState => {
      this.authenticated = authState.authenticated;
    });

    return {
      authenticated: false,
      message: ""
    };
  },

  methods: {
    // this method calls the AuthService login() method
    login() {
      auth.login();
    },
    handleAuthentication() {
      auth.handleAuthentication();
    },
    logout() {
      auth.logout();
    },
    privateMessage() {
      const url = `${API_URL}/api/private/`;
      return axios
        .get(url, {
          headers: { Authorization: `Bearer ${auth.getAuthToken()}` }
        })
        .then(response => {
          this.message = response.data || "";
        });
    }
  }
};
</script>
<style scoped>
/* TODO: Have this apply to the html */
#nav > a {
  color: white;
}
</style>
