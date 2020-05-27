<template>
  <div class="budget-list-wrap">
    <ElCard :header="header">
      <ElTabs type="card">
        <ElTabPane label="All">
          <template v-if="!isEmpty">
            <BudgetItem :list="list" @deleteItem="deleteItem" />
          </template>
          <ElAlert v-else type="info" :title="emptyTitle" :closable="false" />
        </ElTabPane>
        <ElTabPane label="INCOME">
          <template v-if="!isEmpty">
            <BudgetItem :list="inSort" @deleteItem="deleteItem" />
          </template>
          <ElAlert v-else type="info" :title="emptyTitle" :closable="false" />
        </ElTabPane>
        <ElTabPane label="UOTCOME">
          <template v-if="!isEmpty">
            <BudgetItem :list="outSort" @deleteItem="deleteItem" />
          </template>
          <ElAlert v-else type="info" :title="emptyTitle" :closable="false" />
        </ElTabPane>
      </ElTabs>
    </ElCard>
  </div>
</template>
<script>
import BudgetItem from "./BudgetItem";

export default {
  name: "BudgetList",
  components: { BudgetItem },
  props: {
    list: {
      type: Object,
      default: () => ({}),
    },
  },
  data: () => ({
    header: "Budget List",
    emptyTitle: "Empty list",
  }),
  computed: {
    isEmpty() {
      return !Object.keys(this.list).length;
    },
    outSort() {
      return Object.values(this.list).reduce((acc, item) => {
        if (item.type === "UOTCOME") {
          acc[item.id] = item;
        }
        return acc;
      }, {});
    },
    inSort() {
      return Object.values(this.list).reduce((acc, item) => {
        if (item.type === "INCOME") {
          acc[item.id]= item;
        }
        return acc;
      }, {});
    },
  },
  methods: {
    deleteItem(id) {
      this.$emit("deleteItem", id);
    },
  },
};
</script>

<style scoped>
.budget-list-wrap {
  max-width: 500px;
  margin: auto;
}
</style>
