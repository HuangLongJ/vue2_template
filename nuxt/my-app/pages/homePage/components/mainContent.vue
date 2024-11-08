<script>
export default {
  name: 'mainContent',
  data () {
    return {

    }
  },
  computed: {
    logoList () {
      const img = [
        {
          src: require('/static/images/logo/dell.png')
        },
        {
          src: require('/static/images/logo/amazon.png')
        },
        {
          src: require('/static/images/logo/sap.png')
        },
        {
          src: require('/static/images/logo/siemens.png')
        },
        {
          src: require('/static/images/logo/signify.png')
        },
        {
          src: require('/static/images/logo/sanofi.png')
        },
        {
          src: require('/static/images/logo/in.png')
        }
      ]
      return img.concat(img)
    },
    imgRender () {
      return (className) => (
        <div class={className}>
          <img src={require('/static/images/components/homePage/mainContent.png')} />
        </div>
      )
    }
  },
  asyncData (data) {

  },
  mounted () {

  },
  methods: {

  },
  render () {
    return (
      <div class="main-box container-box">
        <div class="main-content container-content">
          <div class="main-top">
            <div class="main-left">
              <div class="main-title">Next Generation B2B Marketing Technology Platform</div>
              <div class="main-tip">
                Improving marketing efficiency and business performance - social media based, real time personalization,
                sales-marketing alignment, and AI-driven
              </div>
              <button class="btn-custom-main">Get started free</button>
            </div>
            {this.imgRender('main-right')}
          </div>
          <div class="main-bottom">
            <div class="main-bottom-left">Serving over 500 leading global B2B companies</div>
            <div class="main-bottom-right">
              <div class="main-logo-box">
                {
                  this.logoList.map((item, index) => (
                    <div class="main-logo-item" key={index}>
                      <img src={item.src} />
                    </div>
                  ))
                }
              </div>
            </div>
          </div>
          {this.imgRender('moblie-main-right')}
        </div>
      </div>
    )
  }
}
</script>
<style scoped lang="scss">
.main-box {
  padding: 127px 0 77px;
  background: linear-gradient(122deg, #100d2c 11%, #3c27a6 45%, #7c3cb6 73%, #3b5ccd 88%);
  min-height: calc(100vh - 134px);
  .main-content {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    .main-top {
      display: flex;
      align-items: center;
      justify-content: center;
      .main-left {
        flex: 1;
        max-width: 616px;
        min-height: 476px;
        margin-right: 105px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        transition: all 0.3s;
        .main-title {
          font-size: 56px;
          font-weight: bold;
          line-height: 64px;
          color: #ffffff;
          margin-bottom: 42px;
        }
        .main-tip {
          font-size: 24px;
          font-weight: 500;
          line-height: 32px;
          display: flex;
          align-items: center;
          color: #ffffff;
          margin-bottom: 72px;
        }
      }
      .main-right {
        max-width: 529px;
        max-height: 476px;
      }
    }
    .main-bottom {
      display: flex;
      justify-content: flex-start;
      height: 72px;
      margin-top: 90px;
      width: 100%;
      .main-bottom-left {
        width: 311px;
        font-size: 24px;
        font-weight: 500;
        line-height: 36px;
        display: flex;
        align-items: center;
        color: #ffffff;
        &::after {
          content: '';
          width: 1px;
          height: 40px;
          background-color: #fff;
        }
      }
      .main-bottom-right {
        flex: 1;
        margin-left: 50px;
        overflow: hidden;
        .main-logo-box {
          display: flex;
          width: fit-content;
          animation: imgMove-data 20s linear infinite;
          &:hover {
            animation-play-state: paused;
          }
          .main-logo-item {
            width: max-content;
            height: 70px;
            margin: 0 65px;
            &:first-child {
              margin-left: 0;
            }
            &:last-child {
              margin-right: 130px;
            }
          }
        }
      }
    }
    .moblie-main-right {
      display: none;
      width: 100%;
      margin-top: 77px;
    }
  }
}
@keyframes imgMove-data {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-50%);
  }
}
@include phone {
  .main-box {
    .main-content {
      .main-top {
        .main-left {
          margin: 0;
          max-width: none;
          min-height: none;
        }
        .main-right {
          display: none;
        }
      }
      .moblie-main-right {
        display: block;
      }
    }
    .main-bottom {
      .main-bottom-right {
        margin-right: -15%;
      }
    }
  }
}
</style>
