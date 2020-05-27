<template>
  <div>
    <div
      class="list-item"
      v-for="(item, prop) in outSort"
      :key="prop"
      :class="item.type"
    >

        <i class="el-icon-bottom"></i>


      <span class="budget-comment">
        {{ item.comment }}
      </span>
      <span class="budget-value">
        {{ item.value }}
      </span>
      <ElButton type="danger" size="mini" @click="dialogVisible = true"
        >Delete</ElButton
      >
      <ElDialog
        title="Confirm Delete"
        :visible.sync="dialogVisible"
        width="30%"
      >
        <span>Are you sure ?</span>
        <span slot="footer" class="dialog-footer">
          <ElButton @click="dialogVisible = false">Cancel</ElButton>
          <ElButton type="primary" @click="dellItem(item.id)">Confirm</ElButton>
        </span>
      </ElDialog>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import { mapActions } from "vuex";
export default {
  name: "OutcomeVal",

  data: () => ({
    dialogVisible: false,
  }),
  computed: {
    ...mapGetters("items", ["itemsList"]),
        outSort() {
      return Object.values(this.itemsList).reduce((acc, item) => {
        if (item.type === "UOTCOME") {
          acc[item.id] = item;
        }
        return acc;
      }, {});
    },
  },
  methods: {
    ...mapActions("items", ["deleteItem"]),
    dellItem(id) {
      this.dialogVisible = false;
      this.deleteItem(id);
    },
  },
};
</script>

<style scoped>
.budget-value {
  font-weight: bold;
  margin-left: auto;
  margin-right: 20px;
}
.list-item {
  display: flex;
  align-items: center;
  padding: 10px, 15px;
}
</style>
