<script>
export default {
  name: 'introduceOne',
  data () {
    return {

    }
  },
  computed: {
    list () {
      return [
        {
          src: require('~/assets/images/components/solutions/introduceOneItem1.png'),
          title: 'Content Management',
          target: 'contentManagement',
          tip: "Drag and drop to build customer content marketing center with zerocode, producing different types of content for customers with different lifecycles. By combining personalized graphics, forms, mini programs, and other forms, we can accurately reach customers through multiple social channels and track the interactive effect in real-time, ultimately guiding customers to enter the next procurement stage."
        },
        {
          src: require('~/assets/images/components/solutions/introduceOneItem2.png'),
          title: 'Event Management',
          target: 'eventManagement',
          tip: "Full marketing process management covering webinar and offline activities. Improve the operational efficiency of activities and the digital experience of customers in every aspect, including pre registration, in-session interaction, post-session follow-up, and data analysis."

        },
        {
          src: require('~/assets/images/components/solutions/introduceOneItem3.png'),
          title: 'E-Commerce',
          target: 'eCommerce',
          tip: "Connect major e-commerce platforms and private e-commerce stores with social media channels. Using social media as the main marketing platform and leveraging customer insights, we help B2B companies enhance conversion and repurchase, and achieve GMV growth on their e-commerce platform."
        },
        {
          src: require('~/assets/images/components/solutions/introduceOneItem4.png'),
          title: 'Distributor Enablement',
          target: 'distributorEnablement',
          tip: "Support distribtor enablement with digital content center and real-time personalized engagement on social channel. Enhance collaboration with distributor by improving information flow between B2B enterprises with their distributors abd leveraging AI capabilities in intelligently suggesting next actions to distributors."
        },
        {
          src: require('~/assets/images/components/solutions/introduceOneItem5.png'),
          title: 'Leads Nurturing',
          target: 'leadsNurturing',
          tip: "Continuously nurture sales leads at different stages of their lifecycle. Predicting customer behavior, discovering high-quality business opportunities, and improving conversion rate."
        },
        {
          src: require('~/assets/images/components/solutions/introduceOneItem6.png'),
          title: 'Sales Enablement',
          target: 'salesEnablement',
          tip: "Continuously nurture sales leads at different stages of their lifecycle. Predicting customer behavior, discovering high-quality business opportunities, and improving conversion rate."
        },
      ]
    },
    titleRender () {
      return (item) => (<div class="item-box-title medium-title" domPropsInnerHTML={item.title}></div>)
    }
  },

  render () {
    return (
      <div class="box container-box">
        <div class="content container-content">
          <div class="title big-title">Integrated marketing solution for marketing and sales</div>
          <div class="tip big-title-tip">
            Connect marketing and sales to empower enterprises to achieve customer-centric growth
          </div>
          <div class='list'>
            {
              this.list.map((item, index) => {
                return (
                  <div class="item" key={index} id={item.target}>
                    <div class="item-box">
                      <div class="item-box-style-img"><img src={require('~/assets/images/components/solutions/introduceOneItemStyle.png')} /></div>
                      {this.titleRender(item)}
                      <div class="item-box-main">
                        <div class="item-box-img">
                          <img src={item.src} />
                          <div class="item-box-img-style"></div>
                        </div>
                        {this.titleRender(item)}
                        <div class="item-box-tip medium-title-tip" domPropsInnerHTML={item.tip}></div>
                      </div>
                      <btnBtns class="item-box-btns" />
                    </div>

                    <div class="item-box item-box-style"></div>
                  </div>
                )
              })
            }
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
    .list {
      margin-top: 90px;
      .item {
        margin-bottom: 90px;
        scroll-margin-top: 140px;
        &:last-child {
          margin-bottom: 0;
        }

        .item-box {
          position: relative;
          padding: 50px 30px 70px;
          border-radius: 20px;
          background: #ffffff;
          box-shadow: 0px 4px 20px 0px rgba(210, 215, 228, 0.5);
          z-index: 2;
          &.item-box-style {
            margin-top: -85px;
            box-shadow: 0px 4px 20px 0px rgba(210, 215, 228, 0.5);
            z-index: 1;
          }
          .item-box-style-img {
            position: absolute;
            top: 0;
            right: 0;
            max-width: 136px;
            max-height: 136px;
          }

          .item-box-title {
            display: block;
            margin-bottom: 40px;
            text-align: center;
          }
          .item-box-main {
            display: grid;
            grid-template-columns: 422px 1fr;
            align-items: center;
            grid-gap: 28px;
            margin-bottom: 50px;
            .item-box-img {
              width: 400px;
              height: 190px;
              position: relative;
              img {
                position: relative;
                z-index: 2;
              }
              .item-box-img-style {
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                transform: translate(20px, 30px);
                background-color: #f6f7ff;
                z-index: 1;
              }
            }
            .item-box-title {
              display: none;
            }
          }
          .item-box-btns {
            ::v-deep {
              justify-content: center;
            }
          }
        }
      }
    }
  }
}

@include phone {
  .box {
    padding: 90px 0 100px;
    .content {
      .list {
        .item {
          .item-box {
            padding: 52px 50px 58px;
            .item-box-style-img {
              width: 80px;
              height: 80px;
            }
            .item-box-title {
              display: none;
            }
            .item-box-main {
              grid-template-columns: 1fr;
              grid-gap: 0;
              .item-box-img {
                width: 548px;
                height: 278px;
                .item-box-img-style {
                  transform: translate(28px, 45px);
                }
                margin-bottom: 40px + 45px;
              }
              .item-box-title {
                display: block;
                text-align: left;
                margin-bottom: 40px;
              }
            }
          }
        }
      }
    }
  }
}
</style>
