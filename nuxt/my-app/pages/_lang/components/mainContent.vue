<script>
export default {
  name: 'mainContent',
  inject: ['root'],
  data () {
    return {

    }
  },
  computed: {
    logoList () {
      const img = [
        {
          src: '/images/logo/dell.png'
        },
        {
          src: '/images/logo/amazon.png'
        },
        {
          src: '/images/logo/sap.png'
        },
        {
          src: '/images/logo/siemens.png'
        },
        {
          src: '/images/logo/signify.png'
        },
        {
          src: '/images/logo/sanofi.png'
        },
        {
          src: '/images/logo/in.png'
        }
      ]
      return img.concat(img)
    },
    imgRender () {
      return (className) => (
        <div class={className}>
          <img src={'/images/components/homePage/mainContent.png'} alt="B2B Marketing Technology Platform" />
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
              <button class="btn-custom-main" data-btnType="freeBtnCTA" onClick={this.root.startCtaHandler}>Get started free</button>
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
  padding: 50px 0 30px;
  background: linear-gradient(122deg, #100d2c 11%, #3c27a6 45%, #7c3cb6 73%, #3b5ccd 88%);
  min-height: calc(100vh - #{$navHeight});
  .main-content {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    .main-top {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 100%;
      .main-left {
        flex: 1;
        width: 616px;
        height: 476px;
        margin-right: 105px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
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
        width: 529px;
        height: 476px;
      }
    }
    .main-bottom {
      display: flex;
      justify-content: flex-start;
      height: 72px;
      margin-top: 45px;
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
            width: auto;
            height: 70px;
            margin: 0 65px;
            img {
              width: auto;
            }
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
    min-height: 0;
    .main-content {
      .main-top {
        .main-left {
          width: 100%;
          height: auto;
          margin: 0;
          .main-title {
            margin-bottom: 20px;
          }
          .main-tip {
            margin-bottom: 40px;
          }
        }
        .main-right {
          display: none;
        }
      }
      .main-bottom {
        .main-bottom-right {
          .main-logo-box {
            .main-logo-item {
              margin: 0 30px;
              &:last-child {
                margin-right: 60px;
              }
            }
          }
        }
      }
      .moblie-main-right {
        display: block;
      }
    }
    .main-bottom {
      .main-bottom-right {
        margin-right: -5%;
      }
    }
  }
}
</style>
