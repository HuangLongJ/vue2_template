<script>
export default {
  name: "btns",
  components: {},
  inject: ['root'],
  props: {
    config: {
      type: Object,
      default: () => ({})
    }
  },
  data () {
    return {};
  },
  created () { },
  computed: {
    defaultConfig () {
      return Object.assign({}, {
        btnText1: "Get a demo",
        dataBtnType1: 'pageDemoBtn', // 按钮类型 - cta类型
        btnType1: 'primary',
        btnText2: "Get started free",
        btnType2: 'plain',
        dataBtnType2: 'freeBtn', // 按钮类型 - cta类型
      }, this.config)
    }
  },
  methods: {
    handler () {
      this.$emit('clickHandler', this.btnType)
    }
  },
  render () {
    return (
      <div class="box-btns">
        {
          <button
            class={`btn-${this.defaultConfig.btnType1}`}
            data-btnType={this.defaultConfig.dataBtnType1}
            onClick={this.root.startCtaHandler}>
            {this.defaultConfig.btnText1}
          </button>
        }
        {
          <button
            class={`btn-${this.defaultConfig.btnType2}`}
            data-btnType={this.defaultConfig.dataBtnType2}
            onClick={this.root.startCtaHandler}>
            {this.defaultConfig.btnText2}
          </button>
        }
      </div>
    )
  }
};
</script>
<style scoped lang="scss">
.box-btns {
  display: flex;
  align-items: center;
  justify-content: space-between;
  button + button {
    margin-left: 88px;
  }
}
@include phone {
  .box-btns {
    button + button {
      margin-left: 40px;
    }
  }
}
</style>
