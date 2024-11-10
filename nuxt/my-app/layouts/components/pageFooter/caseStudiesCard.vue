
<script>
export default {
  name: "caseStudiesCard",
  components: {},
  props: {},
  data () {
    return {};
  },
  created () { },
  computed: {},
  methods: {},
  render () {
    return (
      <div class="case-studies-card">
        <div class="case-studies-card-box">
          <div class="case-studies-card-box-title">Let's talk about what JINGdigital can do for your business.</div>
          <button class="btn-plain">TALK TO AN EXPERT</button>
        </div>
        <div class="footer-card-bgImg">
          <img src={require('/static/images/components/caseStudies/pageFooter2.png')} />
        </div>
      </div>
    )
  }
};
</script>
<style scoped lang="scss">
.case-studies-card {
  position: relative;
  width: 100%;
  height: 200%;
  border-radius: 20px;
  overflow: hidden;
  .case-studies-card-box {
    position: relative;
    z-index: 1;
    padding: 56px 60px;
    display: grid;
    grid-template-columns: 1fr max-content;
    grid-gap: 68px;
    align-items: flex-end;
    .case-studies-card-box-title {
      font-size: 40px;
      font-weight: bold;
      line-height: 70px;
      color: #ffffff;
    }
    .btn-plain {
      border: 1px solid #3c27a6;
      font-size: 22px;
      padding: 0 24px;
      background: #fff;
      color: #5523b0;
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
  .case-studies-card {
    .case-studies-card-box {
      padding: 24px 43px;
      gap: 0;
      grid-template-columns: 1fr max-content;
      .case-studies-card-box-title {
        font-size: 24px;
        line-height: 48px;
      }
      .btn-plain {
        min-width: 0;
        height: 33px;
        font-size: 14px;
        padding: 0 20px;
      }
    }
  }
}
</style>
