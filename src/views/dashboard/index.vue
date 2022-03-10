<template>
  <div class="dashboard-container">
    <div class="dashboard-text">name: {{ name }}</div>
    <h2>商品数量:{{ procount }}</h2>
    <h2>用户数量:{{ usercount }}</h2>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import { pros, users } from "@/api/statistic";

export default {
  name: "Dashboard",
  computed: {
    ...mapGetters(["name"]),
  },
  data() {
    return {
      procount: 0,
      usercount: 0,
    }
  },
  mounted() {
    pros().then(res => {
      // console.log(res)
      this.procount = res.data;
    });
    users().then(res=>{
      // console.log(res)
      this.usercount = res.data
    })
  },
  
};
</script>

<style lang="scss" scoped>
.dashboard {
  &-container {
    margin: 30px;
  }
  &-text {
    font-size: 30px;
    line-height: 46px;
  }
}
</style>
