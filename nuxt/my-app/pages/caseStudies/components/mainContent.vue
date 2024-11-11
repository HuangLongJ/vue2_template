<script>
export default {
  name: 'mainContent',
  data () {
    return {

    }
  },
  computed: {
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
              <div class="main-title">Success Stories</div>
              <div class="main-tip">
                Empowering over 500 global B2B companies to accelerate digital marketing transformation and achieve sustainable growth.
              </div>
              <btnBtns config={{ btnText1: "Get started free" }} />
            </div>
            <div class="main-right">
              <img src={require('~/assets/images/components/caseStudies/mainContent.png')} />
            </div>
          </div>

        </div>
      </div>
    )
  }
}
</script>
<style scoped lang="scss">
.main-box {
  padding: 78px 0 140px;
  background: linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, #F1F3FF 99%);
  min-height: calc(100vh - $navheight);
  .main-content {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    .main-top {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      grid-gap: 115px;
      .main-left {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        transition: all 0.3s;
        .main-title {
          font-size: 56px;
          font-weight: bold;
          line-height: 64px;
          color: #5523b0;
          margin-bottom: 60px;
        }
        .main-tip {
          font-size: 22px;
          font-weight: 500;
          line-height: 32px;
          color: #1e1e1e;
          margin-bottom: 90px;
        }
      }
      .main-right {
        width: 512px;
        height: 435px;
      }
    }
  }
}

@include phone {
  .main-box {
    padding: 90px 0 76px;
    .main-content {
      .main-top {
        display: grid;
        grid-template-columns: repeat(1, 1fr);
        grid-gap: 30px;
        .main-left {
          .main-title {
            margin-bottom: 42px;
          }
          .main-tip {
            margin-bottom: 62px;
          }
          ::v-deep {
            .box-btns {
              justify-content: center;
              .btn-primary {
                border-radius: 30px;
              }
              .btn-plain {
                display: none;
              }
            }
          }
        }
      }
    }
  }
}
</style>
