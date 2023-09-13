<template>
  <div>
    <el-form :model="ruleRorm" ref="ruleRorm" :rules="rules">
      <el-form-item label="">
        <el-input v-model="ruleRorm.input">11</el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">立即创建</el-button>
        <el-button>取消</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  name: "form",
  components: {},
  props: {},
  data() {
    return {
      ruleRorm: {},
    };
  },
  created() {},
  computed: {
    rules() {
      return [];
    },
  },
  methods: {
    onSubmit() {},
  },
};
</script>
<style scoped lang="scss"></style>
