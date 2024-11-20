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
          src: '/images/components/products/introduceOneItem1.png',
          title: 'Marketing Automation',
          target: 'marketingAutomation',
          tip: 'If you are a marketer or CRM manager, we provide a complete marketing automation tool for your business, which can support your customer engagement efforts throughout your customer‘s life cycle, from acquisition to conversion. you can create personalized engagement through your social channels. ',
          layout: 1, // 1 图片优先
        },
        {
          src: '/images/components/products/introduceOneItem2.png',
          title: 'Sales Engage',
          target: 'salesEngage',
          tip: "Sales teams now can use a sales tool that leverages the power of social to increase conversions, by giving sales teams a comprehensive view of customers and understanding of customer behaviors before conversion. Whether you are a sales professional that is looking for more marketing data such as customer profile or sales leader who is looking to better track your sales team's path to conversion, this is the tool for you.",
          layout: 2, // 2 文字优先

        },
        {
          src: '/images/components/products/introduceOneItem3.png',
          title: 'Omni Social',
          target: 'omniSocial',
          tip: 'Integrate with major social media platforms such as WhatsApp, LinkedIn, Facebook, Twitter, Instagram, Line, etc., to provide enterprises with social media marketing services/automated processes such as content production and distribution, event dissemination, potential customer incubation, customer experience/customer service, etc. Assist clients in personalized marketing management on social media, continuously improving brand promotion effectiveness/sales growth.',
          layout: 1,
        },
        {
          src: '/images/components/products/introduceOneItem4.png',
          title: 'Al Suite',
          target: 'alSuite',
          tip: 'JING integrates major LLM and provides solutions to support marketing teamsin content generation, strategic decision-making, customer experience, marketing automation, knowledge base, data analysis, and marketing collaboration across organizations.',
          layout: 2,
        },
        {
          src: '/images/components/products/introduceOneItem5.png',
          title: 'AppMart',
          target: 'appMart',
          tip: 'We provide you with an application integration platform for innovative 3rd party solutions. For example, customers using platforms such as Salesforce, HubSpot, Zoho CRM can use standard connectors available on AppMart to quickly connect their current CRM with your own system, membership system, marketing cloud, or mainstream social media platforms, and integrate it into the customer journey for deep marketing interaction with customers.',
          layout: 1,
        },
        {
          src: '/images/components/products/introduceOneItem6.png',
          title: 'CDP <br/><span>(Customer Data Platform)</span>',
          alt: 'CDP(Customer Data Platform)',
          target: 'cdp',
          tip: 'The exclusive customer data platform for B2B multinational enterprises, carrying the entire marketing cycle from customer acquisition to order completion, connects with mainstream CRM, and ensures data security and reliability.',
          layout: 2,
        },
      ]
    },
    imgRender () {
      return (item) => (
        <div class="item-box-img">
          <img src={item.src} alt={item.alt || item.title} />
        </div>
      )
    },
    btnRender () {
      return () => (<btnBtns class="item-box-btns" />)
    },
    textRender () {
      return (item) => (
        <div class="item-box-text">
          <div class="item-box-top">
            <div class="item-box-title medium-title" domPropsInnerHTML={item.title}></div>
            <div class="item-box-tip medium-title-tip" domPropsInnerHTML={item.tip}></div>
          </div>
          {this.btnRender()}
        </div>
      )
    }
  },

  render () {
    return (
      <div class="main">
        <div class="box container-box">
          <div class="content container-content">
            <div class="title big-title">Product introductions</div>
            <div class="tip big-title-tip">
              Understand JING's product suits and business applications
            </div>
          </div>
        </div>
        <div class='list'>
          {
            this.list.map((item, index) => {
              const data = [this.imgRender(item), this.textRender(item)]
              if (item.layout === 2) {
                data.reverse()
              }
              return (
                <div
                  class={['list-item', 'container-box', item.layout === 2 ? 'layout-style' : '']}
                  id={item.target}
                >
                  <div class="container-content">
                    <div class='item' key={index}>
                      {data[0]}
                      {data[1]}
                    </div>
                  </div>
                </div>
              )
            })
          }
        </div>
      </div>
    )
  }
}
</script>
<style scoped lang="scss">
.main {
  .box {
    padding: 100px 0 0;
    .content {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      .title {
        margin-bottom: 20px;
      }
    }
  }
  .list {
    margin-top: 120px;
    .layout-style {
      background: #f6f7ff;
    }
    .list-item {
      scroll-margin-top: 50px;
      &:first-child {
        scroll-margin-top: 160px;
        .item {
          padding-top: 0;
        }
      }
      .item {
        padding: 120px 0;
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-gap: 75px;

        .item-box-text {
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          .item-box-top {
            .item-box-title {
              margin-bottom: 30px;
              ::v-deep {
                span {
                  font-size: 24px;
                  font-weight: 700;
                }
              }
            }
            .item-box-tip {
              margin-bottom: 60px;
            }
          }
        }
      }
    }
  }
}

@include phone {
  .main {
    .box {
      .content {
        .title {
          margin-bottom: 20px;
        }
      }
    }
    .list {
      margin-top: 80px;
      .layout-style {
        .item {
          padding: 0 0 120px;
          /* 元素反排序 */
          display: flex;
          flex-direction: column-reverse;
        }
      }
      .list-item {
        .item {
          grid-template-columns: repeat(1, 1fr);
          grid-gap: 30px;
          .item-box-text {
            .item-box-tip {
              margin-bottom: 50px;
            }
          }
        }
      }
    }
  }
}
</style>
