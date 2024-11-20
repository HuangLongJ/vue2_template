<script>
export default {
  name: 'introduceOne',
  inject: ['root'],
  data () {
    return {

    }
  },
  async mounted () {
    await this.$nextTick()
    const numbers = []
    this.list.forEach((item, index) => {
      numbers.push(this.$refs[`number${index}`])
    })
    numbers.forEach(counter => {
      counter.innerText = 0;
      const upDateNumber = () => {
        // 获取每个类名为number的data-target,即获取最大值
        const target = Number(counter.getAttribute('data-number'))
        // 获取当前div的数值
        const d = Number(counter.innerText)
        // 设置数据增加的值，可以通过target除的数值确定怎么加数值的快慢
        const increment = target / 200
        // 当数字小于最大值时，执行下面的操作
        if (d < target) {
          // 向上取整
          counter.innerText = `${Math.ceil(d + increment)}`
          // 1ms重新调用，不然它会在第一次运行完就结束
          setTimeout(upDateNumber, 1)
        } else {
          counter.innerText = target
        }
      }
      upDateNumber()
    })
  },
  computed: {
    list () {
      return [
        {
          src: '/images/components/caseStudies/introduceOneItem1.png',
          num: '132',
          status: 'increase',
          title: 'Lead Pool Growth',
          tip: "Automated marketing workflows across content, live streaming, events, and e-commerce to drive substantial gains in customer acquisition within 1 year"
        },
        {
          src: '/images/components/caseStudies/introduceOneItem1.png',
          num: '63',
          status: 'increase',
          title: 'Lead-to-Opportunity<br/>Conversion Rate',
          tip: "Continuously nurtured potential customers at each lifecycle stage with personalized follow-ups, delivering added support to elevate conversion rates"

        },
        {
          src: '/images/components/caseStudies/introduceOneItem1.png',
          num: '78',
          status: 'increase',
          title: 'Marketing Team’s<br/>Performance ',
          tip: "Integrated systems to create a seamless marketing journey from lead acquisition to conversion, enhancing ROI through a unified marketing and sales cycle"
        },
      ]
    },
  },

  render () {
    return (
      <div class="box container-box">
        <div class="content container-content">
          <div class="title big-title">With our AI marketing platform, clients experienced these results:</div>
          <div class='list'>
            {
              this.list.map((item, index) => {
                return (
                  <div class="item" key={index}>
                    <div class="item-top">
                      <div class="item-top-img">
                        <img src={item.src} />
                      </div>
                      <div class="item-top-box">
                        <div class="item-top-num-box">
                          <div class="item-top-num" ref={'number' + index} data-number={item.num}>0</div>
                          <div class="item-top-num-tip">%</div>
                        </div>
                        <div class="item-top-status" domPropsInnerHTML={item.status}></div>
                        <div class="item-top-title" domPropsInnerHTML={item.title}></div>
                      </div>
                    </div>
                    <div class="item-content">
                      <div class="item-content-tip" domPropsInnerHTML={item.tip}></div>
                    </div>
                  </div>
                )
              })
            }
          </div>
          <button class="btn-primary" data-btnType="freeBtn" onClick={this.root.startCtaHandler}>Get started free</button>
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
    .list {
      margin: 90px 0 60px;
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      grid-gap: 52px;
      .item {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        border-radius: 20px;
        overflow: hidden;
        box-shadow: 0px 4px 20px 0px rgba(210, 215, 228, 0.5);
        .item-top {
          position: relative;
          .item-top-img {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
          }
          .item-top-box {
            position: relative;
            height: 290px;
            padding: 46px 45px;
            .item-top-num-box {
              margin-bottom: 12px;
              display: flex;
              align-items: flex-end;
              .item-top-num {
                font-weight: bold;
                color: #8847ff;
                font-weight: 700;
                font-size: 100px;
                line-height: 1;
              }
              .item-top-num-tip {
                font-weight: bold;
                color: #8847ff;
                font-weight: 700;
                font-size: 36px;
                line-height: 1.5;
              }
            }

            .item-top-status {
              width: fit-content;
              border-radius: 25px;
              background: #8847ff;
              font-size: 22px;
              font-weight: 500;
              padding: 8px 24px;
              color: #ffffff;
              margin-bottom: 12px;
            }
            .item-top-title {
              font-size: 20px;
              font-weight: 500;
              line-height: 30px;
              color: #4d4d4d;
            }
          }
        }
        .item-content {
          flex: 1;
          padding: 25px 45px;
          background: #f8f8f8;
          .item-content-tip {
            font-size: 20px;
            font-weight: 500;
            line-height: 40px;
            color: #333333;
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
        grid-template-columns: repeat(1, 1fr);
        .item {
          margin-bottom: 90px;
          box-shadow: 0px -4px 10px 0px rgba(210, 215, 228, 0.5);
          .item-top {
            .item-top-box {
              padding: 46px 40px;
            }
          }
          .item-content {
            padding: 25px 40px;
          }
        }
      }
    }
  }
}
</style>
