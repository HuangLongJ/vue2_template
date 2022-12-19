import { isEmpty } from "@/util";
const isEmptyText = (text) => (!isEmpty(text) ? text : "/");
import region from "@/util/region"; // 城市数据

export const Option = {
  align: "center",
  menuAlign: "center",
  border: true,
  stripe: true,
  refreshBtn: false,
  columnBtn: false,
  searchShowBtn: false,
  searchClearable: false,
  index: false, // 序号
  indexLabel: "序号",
  selection: false, // 表格复选框
  reserveSelection: false, // 表格翻页保存复选框
  editBtn: false,
  delBtn: false,
  addBtn: false,
  searchMenuPosition: "left",
  searchMenuSpan: 8,
  searchLabelWidth: 100,
  searchSpan: 8,
  gutter: 60,
  menu: false,
  column: [
    {
      label: "id",
      prop: "id",
      formatter: (val) => {
        return isEmptyText(val.id);
      },
    },
    {
      label: "搜索search",
      prop: "search",
      search: true,
      searchOrder: 0,
      formatter: (val) => {
        return isEmptyText(val.search);
      },
    },
    {
      label: "日期date",
      prop: "date",
      search: true, // date日期 datetime日期时间 daterange 日期区间 datetimerange日期时间区间
      searchType: "datetimerange", // searchType 重新定义搜索框类型 type对datetimerange设置失效
      defaultTime: ["00:00:00", "23:59:59"],
      format: "yyyy-MM-dd HH:mm:ss",
      valueFormat: "yyyy-MM-dd HH:mm:ss",
      searchOrder: 1,
      formatter: (val) => {
        return isEmptyText(val.date);
      },
    },
    {
      label: "选择select",
      prop: "select",
      search: true,
      searchType: "select",
      dicData: [
        {
          label: "选项1",
          value: "0",
        },
        {
          label: "选项2",
          value: "1",
        },
      ],
      //   dicUrl: "/admin/dict/type/...",
      searchOrder: 2,
    },
    {
      label: "城市cascader",
      prop: "select",
      search: true,
      searchType: "cascader",
      dicData: region,
      searchOrder: 3,
      hide: true, // 列表不展示
    },
    {
      label: "单选radio",
      prop: "radio",
      search: true,
      searchType: "radio",
      dicData: [
        {
          label: "全部",
          value: "",
        },
        {
          label: "选项1",
          value: "0",
        },
        {
          label: "选项2",
          value: "1",
        },
      ],
      searchOrder: 4,
      hide: true, // 列表不展示
    },
    {
      label: "多选checkbox",
      prop: "checkbox",
      search: true,
      searchType: "checkbox",
      dicData: [
        {
          label: "全部",
          value: "",
        },
        {
          label: "选项1",
          value: "0",
        },
        {
          label: "选项2",
          value: "1",
        },
      ],
      searchOrder: 4,
      hide: true, // 列表不展示
    },
    // {
    //   label: "字典",
    //   prop: "channelId",
    //   dataType: "number",// 如果返回值是数值型 需设置
    //   dicUrl: "/admin/dict/type/...",
    // },
    {
      label: "条件判断",
      prop: "condition",
      formatter: (val) => {
        if (isEmpty(val.condition)) {
          return "/";
        }
        let condition = "";
        switch (val.condition) {
          case 1:
            condition = "条件1";
            break;
          default:
            condition = "/";
            break;
        }
        return condition;
      },
    },
    {
      label: "操作",
      prop: "option",
      fixed: "right",
    },
  ],
};
