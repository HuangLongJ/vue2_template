<script>
export default {
  name: 'mainContent',
  data () {
    return {

    }
  },
  render () {
    return (
      <div class="main-box container-box">
        <div class="main-box-bg">
          <img src={'/images/components/products/mainContent.png'} />
        </div>
        <div class="main-content container-content">
          <div class="main-title">JINGdigitl Products</div>
          <div class="main-tip">
            JINGdigital provides a comprehensive set of product features and services designed to meet the needs of today's B2B global enterprises for large-scale personalized customer experiences and creation of tangible business impact
          </div>
          <btnBtns />
        </div>
      </div>
    )
  }
}
</script>
<style scoped lang="scss">
.main-box {
  padding-top: 120px;
  background-color: #fff;
  min-height: calc(100vh - #{$navHeight});
  height: 755px;
  position: relative;
  background-color: #fafafa;
  align-items: flex-start;
  .main-box-bg {
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 100%;
    max-width: 1440px;
  }
  .main-content {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    z-index: 1;
    .main-title {
      font-size: 70px;
      font-weight: bold;
      line-height: 64px;
      text-align: center;
      color: #5523b0;
      margin-bottom: 48px;
    }
    .main-tip {
      font-size: 22px;
      font-weight: 500;
      line-height: 32px;
      text-align: center;
      color: #1e1e1e;
      margin-bottom: 78px;
    }
  }
}

@include phone {
  .main-box {
    padding-top: 89px;
    height: 575px;
    min-height: 0;
    .main-box-bg {
      height: 394px;
    }
    .main-content {
      .main-title {
        font-size: 56px;
        line-height: 70px;
        margin-bottom: 42px;
      }
      .main-tip {
        font-size: 20px;
        line-height: 30px;
        margin-bottom: 72px;
      }
      ::v-deep {
        .box-btns {
          .btn-primary {
            border-radius: 36px;
          }
          .btn-plain {
            display: none;
          }
        }
      }
    }
  }
}
</style>
