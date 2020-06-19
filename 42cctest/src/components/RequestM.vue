<template>
  <div>
    <template v-if="isExist">
      <div v-for="request in objectOfRequests" :key="request.date_add">
        <RequestItem :request="request" />
      </div>
    </template>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import RequestItem from "@/components/RequestItem";
export default {
  name: "RequestM",
  props: {},
  components: {
    RequestItem,
  },
  data: () => ({
    requestSocket: null,
    numberOfRequest: 0,
  }),
  mounted() {
    this.fetchRequests();
    document.title = "Task 3";
    window.addEventListener("mouseover", this.ActivityHandler);
  },
  created: function() {
    console.log(`Start connection`);
    this.requestSocket = new WebSocket(
      "ws://" + `127.0.0.1:8000` + "/request/"
    );
    this.requestSocket.onmessage = (event) => {
      const data = JSON.parse(event.data);
      console.log(data);
      console.log(typeof data);

      this.reloadRequestlist(data);
      if (this.numberOfRequest < 10) {
        this.numberOfRequest++;
        document.title = `${this.numberOfRequest}N Task 3`;
      }
    };
  },
  destroyed: function() {
    this.requestSocket.close(1000, "left from request page");
  },
  computed: {
    ...mapGetters("requests", ["objectOfRequests"]),
    isExist() {
      return Boolean(Object.keys(this.objectOfRequests).length);
    },
  },
  methods: {
    ...mapActions("requests", ["fetchRequests", 'reloadRequestlist']),
    ActivityHandler() {
      document.title = "Task 3";
      this.numberOfRequest = 0;
    },
  },
};
</script>
