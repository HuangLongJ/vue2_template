<script>
export default {
  name: 'introduceTwo',
  data () {
    return {

    }
  },
  computed: {
    list () {
      return [
        {
          src: require('~/assets/images/components/homePage/introduceThreeItem1.png'),
          title: 'Content Management',
          tip: 'Quickly generate，publish, promote and analyze personalized marketing content using JING AI'
        },
        {
          src: require('~/assets/images/components/homePage/introduceThreeItem2.png'),
          title: 'Event Management',
          tip: 'Full process management of webinar and off-line events'
        },
        {
          src: require('~/assets/images/components/homePage/introduceThreeItem3.png'),
          title: 'E-Commerce',
          tip: 'Integrate with e-commerce platforms and enhance repeat purchases'
        },
        {
          src: require('~/assets/images/components/homePage/introduceThreeItem4.png'),
          title: 'Distributor Enablement',
          tip: 'Provide intelligent marketing support for distributors and make collaboration with distributors more efficient'
        },
        {
          src: require('~/assets/images/components/homePage/introduceThreeItem5.png'),
          title: 'Leads Nurturing',
          tip: 'Personalized nurturing of sales leads across different stages of their lifecycle to uplift business results'
        },
        {
          src: require('~/assets/images/components/homePage/introduceThreeItem6.png'),
          title: 'Sales Enablement',
          tip: 'Seamless integration of marketing data in sales process to increase sales efficiency and create measurable business results'
        },
      ]
    },
    coverFlowSwiperRender () {
      return this.list.map((item, index) => {
        return {
          render: (
            <div class="swiper-slide-item" key={index}>
              <div class="swiper-slide-item-img">
                <img src={item.src} />
              </div>
              <div class="swiper-slide-item-content">
                <div class="swiper-slide-item-title small-title">{item.title}</div>
                <div class="swiper-slide-item-tip small-title-tip">{item.tip}</div>
              </div>
            </div>
          )
        }
      })
    },
  },
  render () {
    return (
      <div class="box">
        <div class="container-box">
          <div class="content container-content card-box-content">
            <div class="card-box card-style1">
              <div class="card-box card-style2">
                <div class="card-box card-style3">
                  <div class="card-box-title" domPropsInnerHTML={'Need help building a marketing cloud platform?<br/><span> No problem!</span>'}></div>
                  <div class="card-box-tip">
                    Accumulate successful experiences from 500 global B2B enterprises and provide you with technical support services.
                  </div>
                  <btnBtns config={{ btnText1: 'Appointment to Build', btnsBoxStyle: { justifyContent: 'center' } }} />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="container-box">
          <div class="content container-content">
            <div class="title big-title">Unlocking sustained growth of B2B global enterprises with innovation in marketing and sales technology</div>
            <div class="tip big-title-tip">
              End-To-End marketing solution enables usage of marketing data across organizations
            </div>
            <btnBtns class="btns" />
          </div>
        </div>

        <swiperCoverFlowSwiper swiperSlideRender={this.coverFlowSwiperRender} />
      </div>
    )
  }
}
</script>
<style scoped lang="scss">
.box {
  padding: 120px 0;
  .content {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    .card-box {
      border-radius: 60px;
      width: 100%;
      background: #ffffff;
      &.card-style1 {
        background: #f5f5f5;
        overflow: hidden;
        padding-left: 52px;
      }
      &.card-style2 {
        padding-left: 52px;
      }
      &.card-style3 {
        border: 2px solid #3b55ff;
        padding: 64px 100px;
      }
      .card-box-title {
        margin-bottom: 30px;
        font-size: 40px;
        font-weight: bold;
        line-height: 64px;
        text-align: center;
        color: #5523b0;
        ::v-deep {
          span {
            color: #3b55ff;
            font-weight: bold;
          }
        }
      }
      .card-box-tip {
        margin-bottom: 60px;
        font-size: 24px;
        font-weight: 500;
        line-height: 34px;
        text-align: center;
        color: #333333;
      }
    }

    .title {
      margin-top: 120px;
      margin-bottom: 30px;
    }
    .tip {
      margin-bottom: 60px;
    }
    .btns {
      margin-bottom: 90px;
    }
  }
}
.swiper-slide-item {
  width: 425px;
  border-radius: 20px;
  background: #ffffff;
  box-shadow: 0px 4px 20px 0px rgba(210, 215, 228, 0.5);
  .swiper-slide-item-img {
    height: 228px;
  }
  .swiper-slide-item-content {
    min-height: 220px;
    padding: 30px 32px;
  }
  .swiper-slide-item-title {
    margin-bottom: 20px;
  }
}
@include phone {
  .box {
    .content {
      &.card-box-content {
        max-width: 700px;
        .card-box {
          &.card-style1 {
            padding-left: 30px;
          }
          &.card-style2 {
            padding-left: 30px;
          }
          &.card-style3 {
            padding: 62px 30px;
          }
          .card-box-title {
            margin-bottom: 26px;
          }
          .card-box-tip {
            margin-bottom: 46px;
          }
          ::v-deep {
            .box-btns {
              button + button {
                margin-left: 32px;
              }
            }
          }
        }
      }
    }
  }
  .swiper-slide-item {
    width: 485px;
    .swiper-slide-item-content {
      min-height: 300px;
      padding: 35px 38px;
    }
  }
}
</style>
