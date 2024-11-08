<script>
export default {
  name: 'pageFooter',
  computed: {
    list () {
      return [
        {
          title: 'PRODUCTS',
          href: '',
          children: [
            {
              title: 'Marketing Automation',
              href: ''
            },
            {
              title: 'Sales Engage',
              href: ''
            },
            {
              title: 'Omni Social',
              href: ''
            },
            {
              title: 'AI Suite',
              href: ''
            },
            {
              title: 'AppMart',
              href: ''
            },
            {
              title: 'CDP',
              href: ''
            }
          ]
        }, {
          title: 'SOLUTIONS',
          href: '',
          children: [
            {
              title: 'Content Management',
              href: ''
            },
            {
              title: 'Event Management',
              href: ''
            },
            {
              title: 'E-Commerce',
              href: ''
            }, {
              title: 'Distributor Enablement',
              href: ''
            },
            {
              title: 'Leads Nurturing',
              href: ''
            },
            {
              title: 'Sales Enablement',
              href: ''
            }
          ]
        }, {
          title: 'CASE STUDIES',
          href: '',
          children: [
            {
              title: 'High-Tech ',
              href: ''
            },
            {
              title: 'Industrial',
              href: ''
            },
            {
              title: 'Life Science',
              href: ''
            },
            {
              title: ' Business Services',
              href: ''
            }
          ]
        }, {
          title: 'COMPANY',
          href: '',
          children: [
            {
              title: 'About Us',
              href: ''
            },
            {
              title: 'Leadership',
              href: ''
            },
            {
              title: 'Our Locations',
              href: ''
            }, {
              title: 'Core Values',
              href: ''
            },
            {
              title: 'Clients',
              href: ''
            },
            {
              title: 'Privacy Policy',
              href: ''
            }
          ]
        },
      ]
    },
    logos () {
      return [
        {
          src: require('/static/images/logo/Facebook.png'),
          href: ''
        },
        {
          src: require('/static/images/logo/Twitter.png'),
          href: ''
        },
        {
          src: require('/static/images/logo/LinkedIn.png'),
          href: ''
        },
        {
          src: require('/static/images/logo/Instagram.png'),
          href: ''
        },
        {
          src: require('/static/images/logo/YouTube.png'),
          href: ''
        }
      ]
    },
    viewName () {
      return this.$route.name
    },
    cardRender () {
      switch (this.viewName) {
        case 'caseStudies':
          return this.caseStudiesCard
        default:
          return this.defaultCard
      }
    },
    // caseStudies 页面卡片
    caseStudiesCard () {
      return (
        <div class="footer-card case-studies-card">
          <div class="case-studies-card-box">
            <div class="case-studies-card-box-title">Let's talk about what JINGdigital can do for your business.</div>
            <button class="btn-plain">TALK TO AN EXPERT </button>
          </div>
          <div class="footer-card-bgImg">
            <img src={require('/static/images/components/caseStudies/pageFooter2.png')} />
          </div>
        </div>
      )
    },
    // 默认卡片
    defaultCard () {
      return (
        <div class="footer-card">
          <div class="footer-card-box">
            <div class="footer-card-title">Next generation marketing technology to enhance customer experience and improve marketing effectiveness</div>
            <div class="footer-card-tip">Helping over 500 leading B2B companies achieved sustained business growth</div>
            <button class="btn-primary">Get a demo</button>
          </div>
          <div class="footer-card-bgImg">
            <img src={require('/static/images/components/homePage/pageFooter1.png')} />
          </div>
        </div>
      )
    }
  },
  created () {
    console.log(this.viewName)
  },
  render () {
    return (
      <div class={['box', this.viewName]}>
        <div class="footer-box-top container-box">
          <div class="content container-content">
            <div class="footer-top">
              {this.cardRender}
            </div>
          </div>
        </div>
        <div class="footer-box container-box">
          <div class="content container-content">
            <div class="footer-bottom">
              <div class="footer-bottom-link">
                {
                  this.list.map((item, index) => (
                    <div class="footer-bottom-link-item" key={index}>
                      <div class="footer-bottom-link-item-title">{item.title}</div>
                      {
                        item.children.map((items, indexs) =>
                        (<div class="footer-bottom-link-item-link" key={indexs}>
                          <a href={items.href}>{items.title}</a>
                        </div>))
                      }
                    </div>
                  ))
                }
              </div>
              <div class="footer-bottom-base">
                <div class="footer-bottom-base-left">
                  <img src={require('/static/images/logo/whiteLogo.png')} />
                </div>
                <div class="footer-bottom-base-right">
                  <div class="footer-bottom-base-logos">
                    {this.logos.map((item, index) =>
                    (<div class="footer-bottom-base-logo" key={index}>
                      <a href={item.href}>
                        <img src={item.src} />
                      </a>
                    </div>)
                    )}
                  </div>
                  <div class="footer-bottom-base-tel"><span>Phone：400-104-0808</span> <span>Email：info@jingdigital.com</span></div>
                  <div class="footer-bottom-base-address">Copyright © 2024 JINGdigital, Inc. 沪ICP备18018383号-1</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
</script>
<style scoped lang="scss">
.box {
  padding-top: 100px;
  background: #ffffff;
  position: relative;
  .footer-box-top {
    background: linear-gradient(to bottom, #fff 50%, #3c27a6 50%);
    .content {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      .footer-top {
        width: 100%;
        height: 100%;
        .footer-card {
          position: relative;
          width: 100%;
          height: 200%;
          border-radius: 20px;
          box-shadow: 0px 4px 20px 0px rgba(210, 215, 228, 0.5);
          overflow: hidden;
          .footer-card-box {
            position: relative;
            z-index: 1;
            width: 60%;
            height: 100%;
            padding: 48px 0 60px 70px;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            .footer-card-title {
              font-size: 40px;
              line-height: 60px;
              font-weight: bold;
              text-align: left;
              color: #5523b0;
              margin-bottom: 30px;
            }
            .footer-card-tip {
              font-size: 28px;
              line-height: 44px;
              font-weight: 500;
              color: #333333;
              text-align: left;
              margin-bottom: 50px;
            }
          }
          .footer-card-bgImg {
            width: 100%;
            height: 100%;
            position: absolute;
            top: 0;
            bottom: 0;
          }
        }
      }
    }
  }
  .footer-box {
    padding-top: 100px;
    background: linear-gradient(0deg, #100d2c 0%, #3c27a6 44%, #3c27a6 99%);
    .footer-bottom {
      width: 100%;
      .footer-bottom-link {
        display: flex;
        justify-content: space-between;
        margin-bottom: 60px;
        .footer-bottom-link-item {
          .footer-bottom-link-item-title {
            font-size: 26px;
            font-weight: bold;
            line-height: 40px;
            color: #ffffff;
            margin-bottom: 36px;
          }
          .footer-bottom-link-item-link a {
            font-size: 20px;
            font-weight: 500;
            line-height: 40px;
            color: #e3e3e3;
            text-decoration: none;
          }
        }
      }
      .footer-bottom-base {
        border-top: 1px solid #ffffff;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 60px 0 70px;
        .footer-bottom-base-left {
          height: 94px;
        }
        .footer-bottom-base-right {
          font-size: 18px;
          font-weight: 500;
          line-height: 28px;
          color: #ffffff;
          .footer-bottom-base-logos {
            display: flex;
            justify-content: space-between;
            gap: 40px;
            margin-bottom: 22px;
            .footer-bottom-base-logo {
              height: 40px;
            }
          }
          .footer-bottom-base-tel {
            margin-bottom: 8px;
          }
        }
      }
    }
  }
  &.caseStudies {
    .footer-box-top {
      .content {
        .footer-top {
          .case-studies-card {
            box-shadow: none;
            .case-studies-card-box {
              position: relative;
              z-index: 1;
              padding: 56px 60px;
              display: grid;
              grid-template-columns: 1fr max-content;
              grid-gap: 68px;
              align-items: flex-end;
              .case-studies-card-box-title {
                font-size: 40px;
                font-weight: bold;
                line-height: 70px;
                color: #ffffff;
              }
              .btn-plain {
                border: 1px solid #3c27a6;
                font-size: 22px;
                padding: 0 24px;
                background: #fff;
                color: #5523b0;
              }
            }
          }
        }
      }
    }
    .footer-box {
      padding-top: 90px;
    }
  }
}
@include phone {
  .box {
    padding-top: 50px;
    .footer-box-top {
      .content {
        max-width: 100%;
        .footer-top {
          .footer-card {
            .footer-card-box {
              padding: 38px 0 39px 88px;
              .footer-card-title {
                font-size: 24px;
                line-height: 32px;
                margin-bottom: 18px;
              }
              .footer-card-tip {
                font-size: 18px;
                line-height: 24px;
                margin-bottom: 22px;
              }
              .btn-primary {
                min-width: 0;
                height: 37px;
                font-size: 20px;
                padding: 0;
              }
            }
          }
        }
      }
    }
    .footer-box {
      padding-top: 50px;
      .content {
        .footer-bottom {
          .footer-bottom-link {
            display: none;
          }
          .footer-bottom-base {
            border: none;
            flex-direction: column;
            padding: 0 0 52px;
            .footer-bottom-base-left {
              height: 57px;
              margin-bottom: 51px;
            }
            .footer-bottom-base-right {
              display: flex;
              flex-direction: column;
              align-items: center;
              .footer-bottom-base-logos {
                width: 276px;
                gap: 33px;
                margin-bottom: 20px;
                .footer-bottom-base-logo {
                  height: 32px;
                }
              }
              .footer-bottom-base-tel {
                width: 100%;
                display: flex;
                justify-content: space-between;
              }
            }
          }
        }
      }
    }
    &.caseStudies {
      .footer-box-top {
        .content {
          max-width: 660px;
          .footer-top {
            .case-studies-card {
              .case-studies-card-box {
                padding: 24px 43px;
                gap: 0;
                grid-template-columns: 1fr max-content;
                .case-studies-card-box-title {
                  font-size: 24px;
                  line-height: 48px;
                }
                .btn-plain {
                  min-width: 0;
                  height: 33px;
                  font-size: 14px;
                  padding: 0 20px;
                }
              }
            }
          }
        }
      }
      .footer-box {
        padding-top: 47px;
      }
    }
  }
}
</style>
