<script>
export default {
  name: 'introduceThree',
  data () {
    return {

    }
  },
  computed: {
    list () {
      return [
        {
          src: '/images/components/homePage/introduceThreeItem1.png',
          title: 'Content Management',
          tip: 'Quickly generate，publish, promote and analyze personalized marketing content using JING AI'
        },
        {
          src: '/images/components/homePage/introduceThreeItem2.png',
          title: 'Event Management',
          tip: 'Full process management of webinar and off-line events'
        },
        {
          src: '/images/components/homePage/introduceThreeItem3.png',
          title: 'E-Commerce',
          tip: 'Integrate with e-commerce platforms and enhance repeat purchases'
        },
        {
          src: '/images/components/homePage/introduceThreeItem4.png',
          title: 'Distributor Enablement',
          tip: 'Provide intelligent marketing support for distributors and make collaboration with distributors more efficient'
        },
        {
          src: '/images/components/homePage/introduceThreeItem5.png',
          title: 'Leads Nurturing',
          tip: 'Personalized nurturing of sales leads across different stages of their lifecycle to uplift business results'
        },
        {
          src: '/images/components/homePage/introduceThreeItem6.png',
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
    swiperList () {
      return [
        {
          src: '/images/components/homePage/introduceThreeItemTwo1.png',
          logoSrc: '/images/components/homePage/introduceThreeItemTwoLogo1.png',
          title: `By using <span>JINGdigital's</span> potential customer management tool, we can manage potential customer information more effectively. With personalized communication and follow-up strategies, we have significantly improved our conversion efficiency, facilitating a smooth flow through the sales funnel.`,
          tip: 'John<br/>Marketing Director, Greater China'
        },
        {
          src: '/images/components/homePage/introduceThreeItemTwo2.png',
          logoSrc: '/images/components/homePage/introduceThreeItemTwoLogo2.png',
          title: `<span>JINGdigital's</span> product capabilities are industry-leading, with a strong focus on the B2B sector and offering comprehensive features for marketing and conversion. The Jingshuo team always prioritizes customers above all else.`,
          tip: 'Shi<br/>DI Division'
        },
        {
          src: '/images/components/homePage/introduceThreeItemTwo3.png',
          logoSrc: '/images/components/homePage/introduceThreeItemTwoLogo3.png',
          title: `<span>JINGdigital's</span> marketing automation solutions have significantly improved our marketing efficiency, with the growth in our business data being the strongest evidence of this.`,
          tip: 'Laura<br/>Marketing Director'
        },
      ]
    },
    paginationSwiperRender () {
      return this.swiperList.map((item, index) => {
        return {
          render: (
            <div class="swiper2-slide-item" key={index}>
              <div class="swiper2-slide-item-left">
                <div class="swiper2-slide-item-left-logo1">
                  <img src={'/images/components/homePage/introduceThreeItemTwoMain1.png'} />
                </div>
                <div class="swiper2-slide-item-left-title big-title-tip" domPropsInnerHTML={item.title}></div>
                <div class="swiper2-slide-item-left-tip big-title-tip" domPropsInnerHTML={item.tip}></div>
                <div class="swiper2-slide-item-left-logo2">
                  <img src={'/images/components/homePage/introduceThreeItemTwoMain2.png'} />
                </div>
              </div>
              <div class="swiper2-slide-item-right">
                <div class="swiper2-slide-item-right-img">
                  <div class="swiper2-slide-item-right-logo">
                    <img src={item.logoSrc} />
                  </div>
                  <img src={item.src} />
                </div>
              </div>
            </div>
          )
        }
      })
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
      <div class="box">
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
        <div class="container-box">
          <div class="content container-content">
            <div class="title2 big-title">Customer Testimony</div>
            <swiperPaginationSwiper swiperSlideRender={this.paginationSwiperRender} />
          </div>
        </div>
      </div>
    )
  }
}
</script>
<style scoped lang="scss">
.box {
  padding: 100px 0;
  .content {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    .title {
      margin-bottom: 30px;
    }
    .tip {
      margin-bottom: 60px;
    }
    .btns {
      margin-bottom: 90px;
    }
    .title2 {
      margin-top: 100px;
      margin-bottom: 12px;
    }
    .swiper2-slide-item {
      width: 100%;
      height: 100%;
      padding: 62px 0;
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 100px;
      .swiper2-slide-item-left {
        position: relative;
        max-width: 692px;
        min-width: 360px;
        border-radius: 20px;
        background: #ffffff;
        box-shadow: 0px 4px 20px 0px rgba(210, 215, 228, 0.5);
        padding: 46px 43px 37px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;

        .swiper2-slide-item-left-logo1,
        .swiper2-slide-item-left-logo2 {
          position: absolute;
          height: 90px;
          img {
            width: auto;
            height: 90px;
          }
        }
        .swiper2-slide-item-left-logo1 {
          top: 0;
          left: 43px;
          transform: translateY(-80%);
        }
        .swiper2-slide-item-left-logo2 {
          bottom: 0;
          right: 43px;
          transform: translateY(80%);
        }
        .swiper2-slide-item-left-title {
          font-weight: 400;
          text-align: center;
          color: #280071;
          font-family: Playball;
          ::v-deep span {
            font-weight: 700;
            font-family: Playball;
          }
        }
        .swiper2-slide-item-left-tip {
          font-weight: bold;
          text-align: center;
          color: #280071;
          font-family: Playball;
        }
      }
      .swiper2-slide-item-right {
        height: 100%;
        min-width: 360px;
        display: flex;
        align-items: center;
        .swiper2-slide-item-right-logo {
          width: 50%;
          position: absolute;
          top: 0;
          right: 0px;
          padding: 15px 32px;
          border-radius: 8px;
          background: #ffffff;
          box-shadow: 0px 4px 20px 0px rgba(210, 215, 228, 0.5);
          transform: translateY(-50%);
        }
        .swiper2-slide-item-right-img {
          position: relative;
          width: 100%;
        }
      }
    }
  }
}
.swiper-slide-item {
  width: 425px;
  border-radius: 20px;
  background: #ffffff;
  box-shadow: 0px 4px 20px 0px rgba(210, 215, 228, 0.5);
  .swiper-slide-item-img {
    width: 100%;
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
      .swiper2-slide-item {
        grid-template-columns: repeat(1, 1fr);
        .swiper2-slide-item-right {
          .swiper2-slide-item-right-logo {
            left: 0;
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
