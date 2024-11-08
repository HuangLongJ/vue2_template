<script>
export default {
  name: 'introduceOne',
  data () {
    return {

    }
  },
  computed: {
    oneList () {
      return [
        {
          title: '240<span>Million Annual</span>',
          tip: 'Platform user reach',
        },
        {
          title: '11<span>Million Annual</span>',
          tip: 'Leads nurtured',
        },
        {
          title: 'ISO27001',
          tip: 'Information Security Management Certification',
        },
        {
          title: '8000+<span>Annual</span>',
          tip: 'Platform-executed campaigns',
        },
        {
          title: '>100%',
          tip: 'Client renewal rate',
        },
        {
          title: 'Level 3',
          tip: 'Security certification',
        },
      ]
    },
    twoList () {
      return [
        {
          src: require('/static/images/components/company/introduceOneItem1.png'),
          title: 'Kai<br/>Co-founder & CEO',
          tip: "Kai Hong, co-founder and CEO of JINGdigital, has more than 20 years of experience in strategy, marketing and entrepreneurship. Kai founded one of the leading Financial Technology Services Company in China. Kai has also worked for Siemens, Bain & Company, and served as Senior Vice President, Cisco China. Kai holds MBA from Wharton School of Business, MA from University of Pennsylvania and MSc from TH Aachen, Germany."
        },
        {
          src: require('/static/images/components/company/introduceOneItem2.png'),
          title: 'Kun<br/>Co-founder & President',
          tip: "Kun Hsu is co-founder and president of JINGdigital. Kun has invested in 8 companies in the field of technology and education technology, and served as a board member in 3 of them. Before JINGdigital, Kun has worked in the software industry at Microsoft, consulted multinationals on market entry strategies into China while at Bain & Co.. Moreover, in cooperation with Kai, Kun successfully founded and operated one of the leading Financial Technology Services Company in China. Kun has an MBA from INSEAD, MA in International Relations from John Hopkins University and BSc from the Wharton School of the University of Pennsylvania."
        }
      ]
    },
    threeList () {
      const data = [
        {
          src: require('/static/images/components/company/introduceOneItem3.png'),
        },
        {
          title: 'SHANGHAI',
          tip: '18F, 888 Wanhangdu Rd.,<br/>Kaikai Building, Jing’an District,<br/>Shanghai, China'
        },
        {
          title: 'BEIJING',
          tip: '7F Taohui Xintian, 219 Wangfujing Rd.,<br/>Dongcheng District,<br/>Beijing, China'
        },
        {
          title: 'SHENZHEN',
          tip: '5F, UpperHills South Distrct, Loft B, No.5001 Huanggang Rd.,<br/>Futian District, Shenzhen<br/>Guangdong, Shenzhen, China'
        },
        {
          title: 'USA',
          tip: '缺地址<br/>详细地址<br/>有了再加'
        },
        {
          title: 'Germany',
          tip: '缺地址<br/>详细地址<br/>有了再加'
        }
      ]
      data.unshift(data[1])
      return data
    },
    fourList () {
      return [
        {
          src: require('/static/images/icon/file-edit-fill.png'),
          title: 'ENTREPRENEURSHIP'
        },
        {
          src: require('/static/images/icon/empathize-fill.png'),
          title: 'EMPATHY'
        },
        {
          src: require('/static/images/icon/contacts-fill.png'),
          title: 'CUSTOMER FIRST'
        },
        {
          src: require('/static/images/icon/chat-settings-fill.png'),
          title: 'POSITIVITY'
        }
      ]
    },

    moduleData () {
      return [
        {
          title: 'ABOUT US',
          render: this.oneRender
        },
        {
          title: 'LEADERSHIP',
          render: this.twoRender
        },
        {
          title: 'OUR LOCATIONS',
          render: this.threeRender
        },
        {
          title: 'CORE VALUES',
          render: this.fourRender
        }
      ]
    },
    oneRender () {
      return (
        <div class="item-one-box">
          <div class="item-one-box-card" domPropsInnerHTML={'JINGdigital is a leading marketing technology company founded in 2016. We specialize in helping B2B enterprises with lead acquisition, prospect nurturing, and sales empowerment. Our mission is to build an integrated marketing technology platform and provide long-term support through our customer success team to drive significant revenue growth for businesses. <br/><br/>Headquartered in Shanghai, China, JINGdigital is a multinational company with direct service centers in 13 cities, including Beijing, Shanghai, Shenzhen, and cities in the US and Germany (to be updated). We offer advanced marketing automation technology services to over 600 global B2B companies across industries such as high-tech, industrial manufacturing, life sciences, and business services. <br/><br/>We adhere to a SaaS product approach and have robust research, development, and delivery capabilities. Our focus is revenue-driven, utilizing smarter methods to maximize the impact of marketing on revenue.'}>
          </div>
          <div class="item-one-box-list">
            {
              this.oneList.map((item, index) => {
                return (
                  <div class="item-one-box-list-item" key={index}>
                    <div class="item-one-box-list-item-title" domPropsInnerHTML={item.title}></div>
                    <div class="item-one-box-list-item-link"></div>
                    <div class="item-one-box-list-item-tip" domPropsInnerHTML={item.tip}></div>
                  </div>
                )
              })
            }
          </div>
        </div>
      )
    },
    twoRender () {
      return (
        <div class="item-two-box">
          <div class="item-two-box-list">
            {
              this.twoList.map((item, index) => {
                return (
                  <div class="item-two-box-list-item" key={index}>
                    <div class="item-two-box-list-item-img">
                      <img src={item.src} />
                    </div>
                    <div class="item-two-box-list-item-content">
                      <div class="item-two-box-list-item-title" domPropsInnerHTML={item.title}></div>
                      <div class="item-two-box-list-item-tip" domPropsInnerHTML={item.tip}></div>
                    </div>
                  </div>
                )
              })
            }
          </div>
        </div>
      )
    },
    threeRender () {
      return (
        <div class="item-three-box">
          <div class="item-three-box-list">
            {
              this.threeList.map((item, index) => {
                return (
                  <div class="item-three-box-list-item" key={index}>
                    {item.src ? (<div class="item-three-box-list-item-img">
                      <img src={item.src} />
                    </div>)
                      :
                      (
                        <div class="item-three-box-list-item-text">
                          <div class="item-three-box-list-item-text-icon">
                            <img src={require('/static/images/icon/map-pin-fill.png')} />
                          </div>
                          <div class="item-three-box-list-item-text-main">
                            <div class="item-three-box-list-item-text-title small-title" domPropsInnerHTML={item.title}></div>
                            <div class="item-three-box-list-item-text-tip small-title-tip" domPropsInnerHTML={item.tip}></div>
                          </div>

                        </div>
                      )
                    }
                  </div>
                )
              })
            }
          </div>
        </div>
      )
    },
    fourRender () {
      return (
        <div class="item-four-box">
          <div class="item-four-box-list">
            {
              this.fourList.map((item, index) => {
                return (
                  <div class="item-four-box-list-item" key={index}>
                    <div class="item-four-box-list-item-img">
                      <img src={item.src} />
                    </div>
                    <div class="item-four-box-list-item-title" domPropsInnerHTML={item.title}></div>
                  </div>
                )
              })
            }
          </div>
        </div >
      )
    }
  },

  render () {
    return (
      <div class="box container-box">
        <div class="content container-content">
          <div class='list'>
            {
              this.moduleData.map((item, index) => {
                return (
                  <div class="item" key={index}>
                    <div class="item-title big-title">{item.title}</div>
                    {item.render}
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
  padding: 70px 0;
  .content {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    .list {
      width: 100%;
      .item {
        margin-bottom: 100px;
        &:last-child {
          margin-bottom: 0;
        }
        .item-one-box {
          .item-one-box-card {
            width: 100%;
            border-radius: 20px;
            background: #ffffff;
            padding: 42px;
            box-shadow: 0px 4px 20px 0px rgba(210, 215, 228, 0.5);
            font-size: 20px;
            font-weight: 500;
            line-height: 34px;
            color: #333333;
            margin-bottom: 100px;
          }
          .item-one-box-list {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            .item-one-box-list-item {
              display: flex;
              flex-direction: column;
              align-items: center;
              padding: 70px 60px;
              background: linear-gradient(0deg, rgba(246, 247, 255, 0) 0%, #f6f7ff 100%);
              &:nth-child(2) {
                background: linear-gradient(180deg, rgba(246, 247, 255, 0) 0%, #f6f7ff 100%);
              }
              &:nth-child(5) {
                background: linear-gradient(180deg, rgba(246, 247, 255, 0) 0%, #f6f7ff 100%);
              }
              .item-one-box-list-item-title {
                font-weight: 700;
                font-size: 56px;
                line-height: 64px;
                color: #5523b0;
                ::v-deep {
                  span {
                    font-size: 24px;
                    font-weight: 700;
                    margin-left: 8px;
                  }
                }
              }
              .item-one-box-list-item-link {
                width: 53px;
                height: 2px;
                background-color: #5523b0;
                margin: 26px 0 22px;
              }
              .item-one-box-list-item-tip {
                font-size: 20px;
                font-weight: 500;
                line-height: 30px;
                text-align: center;
                color: #4d4d4d;
              }
            }
          }
        }
        .item-two-box {
          .item-two-box-list {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            grid-gap: 124px;
            .item-two-box-list-item {
              display: flex;
              flex-direction: column;
              overflow: hidden;
              border-radius: 20px;
              box-shadow: 0px 4px 20px 0px rgba(210, 215, 228, 0.5);
              .item-two-box-list-item-content {
                flex: 1;
                padding: 40px 45px;
                background: linear-gradient(180deg, rgba(246, 247, 255, 0) 0%, #f6f7ff 100%);
                .item-two-box-list-item-title {
                  font-size: 28px;
                  font-weight: bold;
                  line-height: 42px;
                  text-align: center;
                  color: #3c27a6;
                  margin-bottom: 30px;
                }
                .item-two-box-list-item-tip {
                  font-size: 18px;
                  font-weight: 500;
                  line-height: 36px;
                  color: #333333;
                }
              }
            }
          }
        }
        .item-three-box {
          padding: 40px 100px 16px 80px;
          background: #fafafa;
          border-radius: 20px;
          .item-three-box-list {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 105px;
            row-gap: 0;
            .item-three-box-list-item {
              &:nth-child(3) {
                display: none;
              }
              &:nth-child(6) {
                .item-three-box-list-item-text {
                  border: none;
                }
              }
              &:nth-child(7) {
                .item-three-box-list-item-text {
                  border: none;
                }
              }
              .item-three-box-list-item-img {
                margin-bottom: -34px;
              }
              .item-three-box-list-item-text {
                display: flex;
                padding: 50px 0 45px;
                border-bottom: 1px solid #d8d8d8;

                .item-three-box-list-item-text-icon {
                  width: 30px;
                  height: 30px;
                  margin-right: 11px;
                }
                .item-three-box-list-item-text-main {
                  .item-three-box-list-item-text-title {
                    line-height: 34px;
                    margin-bottom: 20px;
                  }
                  .item-three-box-list-item-text-tip {
                    line-height: 36px;
                  }
                }
              }
            }
          }
        }
        .item-four-box {
          .item-four-box-list {
            display: grid;
            grid-template-columns: repeat(4, 1fr);
            gap: 70px;
            .item-four-box-list-item {
              display: flex;
              flex-direction: column;
              align-items: center;
              .item-four-box-list-item-img {
                max-width: 115px;
                max-height: 115px;
              }
              .item-four-box-list-item-title {
                margin-top: 36px;
                font-size: 24px;
                font-weight: bold;
                line-height: 34px;
                text-align: center;
                color: #5523b0;
              }
            }
          }
        }

        .item-title {
          margin-bottom: 90px;
        }
        &:first-child {
          .item-title {
            margin-bottom: 60px;
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
          .item-one-box {
            .item-one-box-list {
              grid-template-columns: repeat(2, 1fr);
              .item-one-box-list-item {
                padding: 38px 24px;
                .item-one-box-list-item-title {
                  font-size: 48px;
                  ::v-deep {
                    span {
                      font-size: 22px;
                    }
                  }
                }
                .item-one-box-list-item-link {
                  width: 40px;
                  margin: 13px 0 16px;
                }
                .item-one-box-list-item-tip {
                  font-size: 18px;
                  line-height: 28px;
                }
              }
            }
          }
          .item-two-box {
            .item-two-box-list {
              grid-template-columns: repeat(1, 1fr);
              grid-gap: 60px;
            }
          }
          .item-three-box {
            padding: 30px 45px 55px;
            .item-three-box-list {
              grid-template-columns: repeat(1, 1fr);
              gap: 0;
              row-gap: 50px;
              .item-three-box-list-item {
                &:nth-child(1) {
                  display: none;
                }
                &:nth-child(3) {
                  display: block;
                  .item-three-box-list-item-text {
                    padding-top: 0;
                  }
                }
                &:nth-child(6) {
                  .item-three-box-list-item-text {
                    border-bottom: 1px solid #d8d8d8;
                  }
                }
                &:nth-child(7) {
                  .item-three-box-list-item-text {
                    padding-bottom: 0;
                  }
                }
                .item-three-box-list-item-img {
                  margin-bottom: 0;
                }
              }
            }
          }
          .item-four-box {
            .item-four-box-list {
              gap: auto;
              grid-template-columns: repeat(2, 1fr);
            }
          }
          .item-title {
            margin-bottom: 60px;
          }
        }
      }
    }
  }
}
</style>
