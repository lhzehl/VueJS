<template>
  <div>
    <div
      class="list-item"
      v-for="(item, prop) in itemsList"
      :key="prop"
      :class="item.type"
    >
      <template v-if="item.type === 'UOTCOME'">
        <i class="el-icon-bottom"></i>
      </template>
      <template v-else>
        <i class="el-icon-top"></i>
      </template>
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
  name: "BudgetItem",

  data: () => ({
    dialogVisible: false,
  }),
  computed: {
    ...mapGetters("items", ["itemsList"]),
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
