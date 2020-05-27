<template>
  <ElCard class="form-card">
    <ElForm
      :model="formData"
      ref="addItemForm"
      :rules="rules"
      lable-position="top"
    >
      <ElFormItem label="Type" prop="type">
        <ElSelect
          class="type-select"
          v-model="formData.type"
          placeholder="Choose type..."
        >
          <ElOption label="INCOME" value="INCOME" />
          <ElOption label="OUTCOME" value="OUTCOME" />
        </ElSelect>
      </ElFormItem>

      <ElFormItem label="Comments" prop="comment">
        <ElInput v-model="formData.comment" />
      </ElFormItem>
      <ElFormItem label="Value" prop="value">
        <ElInput v-model.number="formData.value" />
      </ElFormItem>
      <ElButton @click="onSubmit" type="primary">Submit</ElButton>
    </ElForm>
  </ElCard>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "Form",
  data() {
    const notZero = (rule, value, callback) => {
      if (value === 0) {
        callback(new Error("Value can't be zero!"));
      } else {
        callback();
      }
    };

    return {
      formData: {
        type: "INCOME",
        comment: "",
        value: 1,
      },
      rules: {
        type: [
          { required: true, message: "Please select type", trigger: "blur" },
        ],
        comment: [
          {
            required: true,
            message: "Please input comment",
            trigger: "change",
          },
        ],
        value: [
          { required: true, message: "Please input value", trigger: "change" },
          {
            type: "number",
            message: "Value must be a number!",
            trigger: "change",
          },
          { validator: notZero, trigger: "change" },
        ],
      },
    };
  },
  computed: {},

  methods: {
    ...mapActions("items", ["addNewItem"]),
    onSubmit() {
      this.$refs.addItemForm.validate((valid) => {
        if (valid) {
          if (this.formData.type === "OUTCOME") {
            this.formData.value = -this.formData.value;
          }

          this.addNewItem(this.formData);
          this.$refs.addItemForm.resetFields();
        }
      });
    },
  },
};
</script>

<style scoped>
.form-card {
  max-width: 500px;
  margin: auto;
}
.type-select {
  width: 100%;
}
</style>
