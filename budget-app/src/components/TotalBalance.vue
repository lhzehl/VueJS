<template>
  <div class="total-value" :style="getBalanceColor">Balance: {{ total }}</div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "TotalBalance",
  // props: {
  //   total: {
  //     tepr: Number,
  //     default: 0,
  //   },
  // },
  //   data: () => ({
  //     color: "",
  //   }),

  computed: {
    ...mapGetters("items", ["itemsList"]),

    total() {
      return Object.values(this.itemsList).reduce(
        (acc, item) => acc + item.value,
        0
      );
    },
    getBalanceColor() {
      if (this.total > 0) {
        return "color:green";
      } else if (this.total < 0) {
        return "color:red";
      } else {
        return "color:black";
      }
    },
  },
};
</script>

<style scoped>
.total-value {
  font-size: 26px;
  text-transform: uppercase;
  padding: 20px;
  text-align: center;
}
</style>
