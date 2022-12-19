<template>
  <div id="content-table">
    <basic-container>
      <avue-crud
        ref="crud"
        style="margin-top: 8px"
        :option="Option"
        :page.sync="page"
        :search.sync="search"
        :data="list"
        :table-loading="listLoading"
        @refresh-change="refreshChange"
        @search-change="searchChange"
        @size-change="sizeChange"
        @current-change="currentChange"
        @selection-change="selectionChange"
        @cell-click="pageto"
        :cell-class-name="addClass"
      >
        <!-- 自定义搜索 -->
        <template slot="search" slot-scope="{ row, size }">
          <el-form
            slot="search"
            ref="search"
            :model="search"
            label-width="130px"
            style="font-size: 15px"
          >
            <el-row>
              <!-- 输入框 -->
              <el-col :span="8">
                <el-form-item label="输入框:" prop="input">
                  <el-input
                    v-model="search.input"
                    placeholder="请输入内容"
                    clearable
                  />
                </el-form-item>
              </el-col>

              <!-- 日期选择 -->
              <el-col :span="8">
                <el-form-item label="日期选择" prop="picker">
                  <el-date-picker
                    v-model="search.picker"
                    type="datetimerange"
                    range-separator="-"
                    start-placeholder="开始日期"
                    end-placeholder="结束日期"
                    value-format="yyyy-MM-dd HH:mm:ss"
                    style="width: 100%"
                    :default-time="['00:00:00', '23:59:59']"
                  />
                </el-form-item>
              </el-col>

              <!-- 下拉选择 -->
              <el-col :span="8">
                <el-form-item label="下拉选择" prop="select">
                  <el-select
                    size="medium"
                    v-model="search.select"
                    placeholder="请选择"
                    clearable
                  >
                    <el-option
                      v-for="item in selectOption"
                      :key="item.value"
                      :label="item.label"
                      :value="item.value"
                    />
                  </el-select>
                </el-form-item>
              </el-col>

              <!-- 单选框 -->
              <el-col :span="8">
                <el-form-item label="单选框:" prop="radio">
                  <el-radio-group v-model="search.radio">
                    <el-radio label="">全部</el-radio>
                    <el-radio :label="1">选择1</el-radio>
                    <el-radio :label="2">选择2</el-radio>
                  </el-radio-group>
                </el-form-item>
              </el-col>
            </el-row>
          </el-form>
        </template>
        <!-- 左导航 -->
        <template slot="menuLeft"> </template>
        <!-- 右导航 -->
        <template slot="menuRight"> </template>
        <!-- 列表操作 -->
        <template slot-scope="{ row }" slot="option">
          <el-button type="text" size="small">按钮</el-button>
        </template>
      </avue-crud>
    </basic-container>
  </div>
</template>

<script>
/* ...必填 */
// import { requestList } from "@/api/...";
// import { Option } from "@/const/crud/...";
import { mapGetters } from "vuex";
export default {
  name: "list",
  components: {},
  props: {},
  data() {
    return {
      search: {},
      page: {
        total: 0, // 总页数
        currentPage: 1, // 当前页数
        pageSize: 10, // 每页显示多少条,
      },
      /* 修改 */
      Option: {},
      list: [],
      listLoading: false,
      selectOption: [],
    };
  },
  computed: {
    ...mapGetters(["permissions"]),
  },
  methods: {
    // 搜索参数处理
    createParams(params) {
      const searchParams = JSON.parse(JSON.stringify(params));
      return searchParams;
    },
    getList({ currentPage: current, sizePage: size }, params) {
      this.listLoading = true;
      /* 修改 */
      _requestList(
        Object.assign(
          { current, size },
          params ? this.createParams(params) : {}
        )
      ).then((response) => {
        if (response.data.code !== 0) {
          return this.$message.error(response.data.msg);
        }
        this.list = response.data.data.records;
        this.page.total = response.data.data.total;
        this.listLoading = false;
      });
    },
    // 点击列表
    pageto(row, column, cell, event) {
      if (column.label === "") {
        // TODO
      }
    },
    // 给指定列设置蓝色字体
    addClass({ row, column, rowIndex, columnIndex }) {
      const arr = [0];
      if (arr.includes(columnIndex)) {
        return "cell-color";
      }
    },
    // 刷新
    refreshChange() {
      this.getList(this.page, this.search);
    },
    searchChange(params, done) {
      this.page.currentPage = 1;
      this.getList(this.page, this.search);
      done();
    },
    sizeChange(pageSize) {
      this.page.pageSize = pageSize;
      this.page.currentPage = 1;
      this.getList(this.page, this.search);
    },
    currentChange(currentPage) {
      this.page.currentPage = currentPage;
      this.getList(this.page, this.search);
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
    // 选中数据
    selectionChange(list) {},
  },
  mounted() {
    /* 控制 */
    // this.getList(this.page, this.search);
  },
};
</script>
<style scoped lang="scss">
#content-table {
  /deep/.el-table__row .cell-color {
    color: #409eff !important;
    cursor: pointer;
  }
}
</style>
