<template>
  <div class="project-container">
    <el-container>
      <el-header>头部</el-header>
      <el-container>
        <el-aside width="200px">雷彪</el-aside>
        <el-main>主体</el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
export default {
  name: "Home",
  components: {},
  props: {},
  data() {
    return {};
  },
  created() {},
  computed: {},
  methods: {},
};
</script>
<style scoped lang="scss">
.project-container {
  min-height: calc(100vh - 10px);
}
</style>
