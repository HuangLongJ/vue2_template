<script>
import defaultCard from './pageFooter/defaultCard.vue';
import caseStudiesCard from './pageFooter/caseStudiesCard.vue';
import companyCard from './pageFooter/companyCard.vue';
import { navList } from '@/common/config/navConfig.js';
export default {
  name: 'pageFooter',
  computed: {
    lang () {
      return this.$route.params.lang || 'en'
    },
    list () {
      return navList
    },
    logos () {
      return [
        {
          src: '/images/logo/Facebook.png',
          path: ''
        },
        {
          src: '/images/logo/Twitter.png',
          path: ''
        },
        {
          src: '/images/logo/LinkedIn.png',
          path: ''
        },
        {
          src: '/images/logo/Instagram.png',
          path: ''
        },
        {
          src: '/images/logo/YouTube.png',
          path: ''
        }
      ]
    },
    viewName () {
      return this.$route.name
    },
    cardRender () {
        console.log(this.viewName)
      switch (this.viewName) {
        case 'lang-case-studies':
          return <caseStudiesCard />
        case 'lang-company':
          return <companyCard />
        default:
          return <defaultCard />
      }
    },
  },
  created () {
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
                      <NuxtLink to={{ path: `/${this.lang}/${item.path}/` }}>
                        <div class="footer-bottom-link-item-title">
                          {item.title}
                        </div>
                      </NuxtLink>
                      {
                        item.children.map((items, indexs) =>
                        (<NuxtLink to={{ path: `/${this.lang}/${item.path}/`, hash: '#' + items.target }}>
                          <div class="footer-bottom-link-item-link" key={indexs} >
                            {items.title}
                          </div>
                        </NuxtLink>
                        ))
                      }
                    </div>
                  ))
                }
              </div>
              <div class="footer-bottom-base">
                <div class="footer-bottom-base-left">
                  <img src={'/images/logo/whiteLogo.png'} />
                </div>
                <div class="footer-bottom-base-right">
                  <div class="footer-bottom-base-logos">
                    {this.logos.map((item, index) =>
                    (<div class="footer-bottom-base-logo" key={index}>
                      <img src={item.src} />
                    </div>)
                    )}
                  </div>
                  <div class="footer-bottom-base-tel"><span>Phone：400-104-0808</span> <span>Email：info@jingdigital.com</span></div>
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
      }
    }
  }
  .footer-box {
    margin-top: -1px;
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
            cursor: pointer;
          }
          .footer-bottom-link-item-link {
            font-size: 20px;
            font-weight: 500;
            line-height: 40px;
            color: #e3e3e3;
            cursor: pointer;
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
          width: 240px;
          height: 70px;
          align-self: flex-start;
        }
        .footer-bottom-base-right {
          font-size: 18px;
          font-weight: 500;
          line-height: 28px;
          color: #ffffff;
          .footer-bottom-base-logos {
            display: flex;
            justify-content: flex-end;
            gap: 26px;
            margin-bottom: 22px;
            .footer-bottom-base-logo {
              width: auto;
              height: 26px;
            }
          }
          .footer-bottom-base-tel {
            font-size: 22px;
            font-weight: 500;
            line-height: 33px;
            margin-bottom: 8px;
            display: flex;
            justify-content: space-between;
          }
          .footer-bottom-base-address {
            font-size: 22px;
            font-weight: 500;
            line-height: 33px;
            text-align: right;
          }
        }
      }
    }
  }
  /* caseStudies 页面卡片 */
  &.caseStudies,
  &.company {
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
              width: 196px;
              height: 57px;
              margin-bottom: 51px;
              align-self: center;
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
    &.caseStudies,
    &.company {
      .footer-box-top {
        .content {
          max-width: 660px;
        }
      }
      .footer-box {
        padding-top: 47px;
      }
    }
  }
}
</style>
