<script>
export default {
  name: "btns",
  components: {},
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
        showBtn1: true,
        btnText1: "Get a demo",
        btnType1: 'primary',
        showBtn2: true,
        btnText2: "Get started free",
        btnType2: 'plain',
        btnsBoxStyle: {},
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
      <div class="box-btns" style={this.defaultConfig.btnsBoxStyle}>
        {this.defaultConfig.showBtn1 && <button class={`btn-${this.defaultConfig.btnType1}`} onClick={() => { this.handler(this.btnType1) }}>{this.defaultConfig.btnText1}</button>}
        {this.defaultConfig.showBtn2 && <button class={`btn-${this.defaultConfig.btnType2}`} onClick={() => { this.handler(this.btnType12) }}>{this.defaultConfig.btnText2}</button>}
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
</style>
