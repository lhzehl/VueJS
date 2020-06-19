<template>
  <div class="container">
    <button
      class="btn btn-success"
      v-if="isLogin && !edited"
      @click="edited = !edited"
    >
      Edit
    </button>
    <router-link v-if="!isLogin" class="btn btn-primary" to="/login"
      >Login</router-link
    >
    <div class="row" v-if="!edited">
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
    <template v-if="edited">
      <div class="row">
        <div class="col-6">
          <div class="row">
            <div class="col-3">
              <p>Name:</p>
              <p>Last Name</p>
              <p>Date of birth:</p>
              <p>Photo:</p>
            </div>
            <div class="col-6">
              <input type="text" v-model="form.name" />
              <input type="text" v-model="form.last_name" />
              <b-form-datepicker
                id="example-datepicker"
                v-model="form.dob"
              ></b-form-datepicker>
              <input
                type="file"
                ref="file"
                id="photo"
                accept="image/*"
                v-on:change="handleFileUpload()"
              />
            </div>
          </div>
        </div>

        <div class="col-6">
          <div class="row">
            <div class="col-3">
              <p>Email</p>
              <p>Jabber</p>
              <p>Skype</p>
            </div>
            <div class="col-6">
              <input type="text" v-model="form.c_mail" />
              <input type="text" v-model="form.jabber" />
              <input type="text" v-model="form.skype" />
            </div>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-6">
          <img class="profile-image" :src="imagePreview" />
        </div>
        <div class="col-6">
          <p>Other contacts</p>
          <input type="text" v-model="form.other_contacts" />
          <p>Bio:</p>
          <input type="text" v-model="form.bio" />
        </div>
      </div>
      <button class="btn btn-primary" @click="onSubmit">Save</button>
      <button class="btn" @click="edited = !edited">Cancel</button>
    </template>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  name: "ProfileItem",
  props: {
    profile: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      edited: false,
      form: {
        name: this.profile.name,
        last_name: this.profile.last_name,
        dob: this.profile.dob,
        photo: null,
        c_mail: this.profile.c_mail,
        jabber: this.profile.jabber,
        skype: this.profile.skype,
        other_contacts: this.profile.other_contacts,
        bio: this.profile.bio,
      },
      imagePreview: "",
    };
  },
  computed: {
    ...mapGetters("auth", ["isLogin"]),
    localeDate() {
      return new Date(this.profile.dob).toLocaleDateString();
    },
  },
  methods: {
    ...mapActions("profile", ["fetchUpdateProfile"]),
    handleFileUpload() {
      this.form.photo = this.$refs.file.files[0];
      const reader = new FileReader();
      reader.addEventListener(
        "load",
        function() {
          this.imagePreview = reader.result;
        }.bind(this),
        false
      );
      if (this.form.photo) {
        if (/\.(jpe?g|png|gif)$/i.test(this.form.photo.name)) {
          reader.readAsDataURL(this.form.photo);
        }
      }
    },
    onSubmit(e) {
      e.preventDefault();
      Object.filter = function(obj, filtercheck) {
        let result = {};
        Object.keys(obj).forEach((key) => {
          if (filtercheck(obj[key])) result[key] = obj[key];
        });
        return result;
      };
      const filterFunc = function(val) {
        return Boolean(val);
      };
      const formFiltered = Object.filter(this.form, filterFunc);
      this.fetchUpdateProfile(formFiltered);
      this.edited = false;
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
