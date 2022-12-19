<template>
  <div>
    <!-- 抽屉 -->
    <!-- <el-drawer
      title="上传视频页面:"
      content-position="left"
      direction="rtl"
      wrapperClosable
      :visible="visible"
      @open="init"
      @close="close"
    ></el-drawer> -->
    <el-dialog
      title="上传素材页面"
      :close-on-click-modal="false"
      :visible="visible"
      width="30%"
      @open="init"
      @close="close"
    >
      <el-form
        :model="form"
        ref="form"
        :rules="rules"
        label-width="80px"
        :inline="false"
        size="normal"
      >
        <el-form-item label="input1：" prop="input1">
          <el-input v-model="form.input1" placeholder="请输入：" />
        </el-form-item>
        <el-form-item label="input2：" prop="input2">
          <el-input v-model="form.input2" placeholder="请输入：" />
        </el-form-item>
      </el-form>

      <span slot="footer">
        <el-button @click="close">取消</el-button>
        <el-button type="primary" @click="save">保存</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
export default {
  props: {},
  data() {
    return {
      visible: false,
      form: {
        input1: "",
        input2: "",
      },
      rules: {
        input1: [{ required: true, message: "", trigger: "change" }],
        input1: [{ required: true, message: "", trigger: "change" }],
      },
    };
  },
  methods: {
    init() {},
    save() {},
    close() {
      this.visible = false;
    },
  },
};
</script>
<style scoped lang="scss"></style>
