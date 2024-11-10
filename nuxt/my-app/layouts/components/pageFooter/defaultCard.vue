
<script>
export default {
  name: "defaultCard",
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
      <div class="footer-card">
        <div class="footer-card-box">
          <div class="footer-card-title">Next generation marketing technology to enhance customer experience and improve marketing effectiveness</div>
          <div class="footer-card-tip">Helping over 500 leading B2B companies achieved sustained business growth</div>
          <button class="btn-primary">Get a demo</button>
        </div>
        <div class="footer-card-bgImg">
          <img src={require('/static/images/components/homePage/pageFooter1.png')} />
        </div>
      </div>
    )
  }
};
</script>
<style scoped lang="scss">
.footer-card {
  position: relative;
  width: 100%;
  height: 200%;
  border-radius: 20px;
  box-shadow: 0px 4px 20px 0px rgba(210, 215, 228, 0.5);
  overflow: hidden;
  .footer-card-box {
    position: relative;
    z-index: 1;
    width: 60%;
    height: 100%;
    padding: 48px 0 60px 70px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    .footer-card-title {
      font-size: 40px;
      line-height: 60px;
      font-weight: bold;
      text-align: left;
      color: #5523b0;
      margin-bottom: 30px;
    }
    .footer-card-tip {
      font-size: 28px;
      line-height: 44px;
      font-weight: 500;
      color: #333333;
      text-align: left;
      margin-bottom: 50px;
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
  .footer-card {
    .footer-card-box {
      padding: 38px 0 39px 88px;
      .footer-card-title {
        font-size: 24px;
        line-height: 32px;
        margin-bottom: 18px;
      }
      .footer-card-tip {
        font-size: 18px;
        line-height: 24px;
        margin-bottom: 22px;
      }
      .btn-primary {
        min-width: 0;
        height: 37px;
        font-size: 20px;
      }
    }
  }
}
</style>
