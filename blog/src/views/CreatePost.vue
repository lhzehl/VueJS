<template>
  <div>
    <b-form @submit="onSubmit" @reset="onReset" v-if="show">
      <b-form-group
        id="input-group-1"
        label="Title"
        label-for="input-1"
        description="Post title"
      >
        <b-form-input
          id="input-1"
          v-model="form.name"
          
          required
          placeholder="Enter title"
        ></b-form-input>
      </b-form-group>

      <b-form-group
        id="input-group-2"
        label="about"
        description="Shot about your post:"
        label-for="input-2"
      >
        <b-form-input
          id="input-2"
          v-model="form.about"
          required
          placeholder="about"
        ></b-form-input>
      </b-form-group>
      <b-form-group
        id="input-group-3"
        label="post body"
        description="description:"
        label-for="input-3"
      >
        <b-form-input
          id="input-3"
          v-model="form.description"
          required
          placeholder="description"
        ></b-form-input>
      </b-form-group>
      <b-form-group id="input-group-4" label="Country:" label-for="input-4">
        <b-form-input
          id="input-4"
          v-model="form.country"
          required
          placeholder="country"
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-5" label="Category:" label-for="input-5">
        <b-form-select
          id="input-5"
          v-model="form.category"
          :options="categories"
          required
        ></b-form-select>
      </b-form-group>
      <b-form-group id="input-group-6" label="Tags:" label-for="input-6">
        <b-form-select
          id="input-6"
          v-model="form.tag"
          :options="options"
          multiple
          :select-size="4"
        ></b-form-select>
      </b-form-group>

      <b-form-group id="input-group-7">
        <b-form-checkbox-group v-model="form.draft" id="checkboxes-4">
          <b-form-checkbox value="true">Draft</b-form-checkbox>
        </b-form-checkbox-group>
      </b-form-group>

      <b-button type="submit" variant="primary">Submit</b-button>
      <b-button type="reset" variant="danger">Reset</b-button>
    </b-form>
    <b-card class="mt-3" header="Form Data Result">
      <pre class="m-0">{{ form }}</pre>
    </b-card>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "CreatePost",
  data: () => ({
    form: {
      name: "",
      about: "",
      description: "",
      country: "",
      tag: [],
      category: null,
      draft: [],
    },

    options: [
      { value: "test tag", text: "test tag" },
      { value: "second test tag", text: "second test tag" },
    ],
    categories: [
      { text: "Choose category", value: null },
      "first category",
      "second category",
    ],
    show: true,
  }),
  methods: {
    ...mapActions("posts", ["fetchNewPost"]),
    onSubmit(evt) {
      evt.preventDefault();
      alert(JSON.stringify(this.form));
      const data = {
        name: this.form.name,
        about: this.form.about,
        description: this.form.description,
        image: null,
        category: this.form.category,
        country: this.form.country,
        tag: this.form.tag,
        draft: this.form.draft,
      };
      console.log(data);

        this.fetchNewPost(data);
    },
    onReset(evt) {
      evt.preventDefault();
      // Reset our form values

      this.form.name = "";
      this.form.about = "";
      this.form.description = "";
      this.form.country = "";
      this.form.category = null;
      this.form.tags = [];
      this.form.draft = [];
      // Trick to reset/clear native browser form validation state
      this.show = false;
      this.$nextTick(() => {
        this.show = true;
      });
    },
  },
};
</script>

<style scoped></style>
