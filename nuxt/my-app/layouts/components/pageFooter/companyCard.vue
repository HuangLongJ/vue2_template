
<script>

export default {
  name: "companyCard",
  inject: ['root'],
  components: {},
  props: {},
  data () {
    return {};
  },
  created () {
  },
  computed: {},
  methods: {},
  render () {
    return (
      <div class="company-card">
        <div class="company-card-box">
          <div class="company-card-box-title">Grow better with JINGdigital today</div>
          <button class="btn-plain" data-btnType="freeBtn" onClick={this.root.startCtaHandler}>Get started free</button>
        </div>
        <div class="footer-card-bgImg">
          <img src={'/images/components/caseStudies/pageFooter2.png'} alt="image" />
        </div>
      </div>
    )
  }
};
</script>
<style scoped lang="scss">
.company-card {
  position: relative;
  width: 100%;
  height: 200%;
  border-radius: 20px;
  overflow: hidden;
  .company-card-box {
    position: relative;
    z-index: 1;
    padding: 50px 90px 46px;
    display: grid;
    grid-template-columns: 1fr;
    grid-gap: 30px;
    .company-card-box-title {
      font-size: 40px;
      font-weight: bold;
      line-height: 70px;
      color: #ffffff;
    }
    .btn-plain {
      border: 1px solid #ffffff;
      font-size: 26px;
      line-height: 28px;
      padding: 0 24px;
      background: transparent;
      color: #ffffff;
    }
  }
  .footer-card-bgImg {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    bottom: 0;
  }
}
@include phone {
  .company-card {
    .company-card-box {
      padding: 24px 43px;
      gap: 16px;
      grid-template-columns: 1fr;
      .company-card-box-title {
        font-size: 24px;
        line-height: 48px;
      }
      .btn-plain {
        min-width: 242px;
        height: 56px;
        font-size: 26px;
      }
    }
  }
}
</style>
