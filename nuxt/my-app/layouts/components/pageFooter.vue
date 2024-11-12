<script>
import defaultCard from './pageFooter/defaultCard.vue';
import caseStudiesCard from './pageFooter/caseStudiesCard.vue';
import companyCard from './pageFooter/companyCard.vue';
import { navList } from '@/common/config/navConfig.js';
export default {
  name: 'pageFooter',
  computed: {
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
      switch (this.viewName) {
        case 'caseStudies':
          return <caseStudiesCard />
        case 'company':
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
                      <NuxtLink to={{ path: item.path }}>
                        <div class="footer-bottom-link-item-title">
                          {item.title}
                        </div>
                      </NuxtLink>
                      {
                        item.children.map((items, indexs) =>
                        (<NuxtLink to={{ path: item.path + '#' + items.target }}>
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
          width: 329px;
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
              width: auto;
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
