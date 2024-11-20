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
              <div class="main-title">JINGdigital Solutions</div>
              <div class="main-tip">
                For different marketing scenarios, JINGdigital can consolidate your full set of marketing strategies to provide you with an automated marketing technology solution, which will help you to achieve brands’ different kinds of KPI. We empower brand to create a higher marketing conversion rate while reducing costs.
              </div>
              <btnBtns />
            </div>
            <div class="main-right">
              <img src={'/images/components/solutions/mainContent.png'} alt="image" />
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
  padding: 140px 0;
  background: linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, #f1f3ff 99%);
  /* min-height: calc(100vh - #{$navHeight}); */
  .main-content {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    .main-top {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      grid-gap: 105px;
      .main-left {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        .main-title {
          font-size: 56px;
          font-weight: bold;
          line-height: 64px;
          color: #5523b0;
          margin-bottom: 70px;
        }
        .main-tip {
          font-size: 22px;
          font-weight: 500;
          line-height: 32px;
          color: #1e1e1e;
          margin-bottom: 72px;
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
    padding: 90px 0 54px;
    min-height: 0;
    .main-content {
      .main-top {
        display: grid;
        grid-template-columns: repeat(1, 1fr);
        grid-gap: 45px;
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
                border-radius: 100px;
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
