<!--
* @描述:
* @姓名: HuangLongJun
* @时间: 2022-12-19 14:28:30
* @最后修改时间: 2022-12-19 14:28:30
* @最后修改人: HuangLongJun
-->

<template>
  <div>
    <!-- <div>{{ user.count }}</div>
    <el-button type="primary" size="default" @click="add"> +1 </el-button> -->
  </div>
</template>

<script>
import { mapState, mapGetters } from "vuex";
export default {
  name: "Home",
  components: {},
  props: {},
  data() {
    return {};
  },
  created() {},
  mounted() {
    this.init();
  },
  destroyed() {},
  computed: {
    ...mapState(["user"]),
    ...mapGetters(["getCount"]),
  },
  methods: {
    init() {},
    add() {
      this.$store.dispatch("setCount", 1);
    },
  },
};
</script>
<style scoped lang="scss"></style>
