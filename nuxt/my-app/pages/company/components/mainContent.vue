<script>
export default {
  name: 'mainContent',
  data () {
    return {

    }
  },
  render () {
    return (
      <div class="main">
        <div class="main-box container-box">
          <div class="main-box-bg">
            <img class="pc" src={require('~/assets/images/components/company/mainContent1.png')} />
            <img class="moblie" src={require('~/assets/images/components/company/mainContent2.png')} />
          </div>
          <div class="main-content container-content">
            <div class="main-title">Empowering B2B Marketers To Make An Impact On Revenue</div>
            <div class="main-tip">
              Asia's Leading B2B Marketing Software Provider
            </div>
            <btnBtns />
          </div>
        </div>
      </div>
    )
  }
}
</script>
<style scoped lang="scss">
.main {
  padding-bottom: 320px;
  margin-bottom: -250px;
  background: linear-gradient(180deg, #d4d9ff 57%, rgba(255, 255, 255, 0) 100%);
  .main-box {
    padding-top: 120px;
    min-height: calc(100vh - #{$navHeight});
    position: relative;
    .main-box-bg {
      position: absolute;
      bottom: 0;
      width: 100%;
      height: 100%;
      .pc {
        display: block;
      }
      .moblie {
        display: none;
      }
    }
    .main-content {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      z-index: 1;
      .main-title {
        font-size: 56px;
        font-weight: bold;
        line-height: 64px;
        text-align: center;
        color: #ffffff;
        margin-bottom: 30px;
      }
      .main-tip {
        font-size: 22px;
        font-weight: bold;
        line-height: 32px;
        text-align: center;
        color: #ffffff;
        margin-bottom: 76px;
      }
      ::v-deep {
        .box-btns {
          margin-bottom: 140px;
          .btn-primary {
            border: 2px solid #b9b6ff;
            color: #b9b6ff;
            background: transparent;
          }
          .btn-plain {
            background-color: #fff;
            border: 1px solid #3c27a6;
          }
          button + button {
            margin-left: 54px;
          }
        }
      }
    }
  }
}

@include phone {
  .main {
    .main-box {
      padding-top: 89px;
      .main-box-bg {
        .pc {
          display: none;
        }
        .moblie {
          display: block;
        }
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
            margin-bottom: 136px;
          }
        }
      }
    }
  }
}
</style>
