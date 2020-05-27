<template>
  <div class="budget-list-wrap">
    <ElCard :header="header">
      <ElTabs type="card">
        <ElTabPane label="All">
          <template v-if="!isEmpty">
            <BudgetItem />
          </template>
          <ElAlert v-else type="info" :title="emptyTitle" :closable="false" />
        </ElTabPane>
        <ElTabPane label="INCOME">
          <template v-if="!isEmpty">
            <IncomeVal/>
          </template>
          <ElAlert v-else type="info" :title="emptyTitle" :closable="false" />
        </ElTabPane>
        <ElTabPane label="UOTCOME">
          <template v-if="!isEmpty">
            <OutcomeVal />
          </template>
          <ElAlert v-else type="info" :title="emptyTitle" :closable="false" />
        </ElTabPane>
      </ElTabs>
    </ElCard>
  </div>
</template>
<script>
import BudgetItem from "./BudgetItem";
import IncomeVal from "./IncomeVal";
import OutcomeVal from "./OutcomeVal";

import { mapGetters } from "vuex";
export default {
  name: "BudgetList",
  components: { BudgetItem, OutcomeVal, IncomeVal },

  data: () => ({
    header: "Budget List",
    emptyTitle: "Empty list",
  }),
  computed: {
    ...mapGetters("items", ["itemsList"]),
    isEmpty() {
      return !Object.keys(this.itemsList).length;
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
