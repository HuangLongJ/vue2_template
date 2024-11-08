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
      return (<div>111</div>)
    },
    threeRender () {
      return (<div>111</div>)
    },
    fourRender () {
      return (<div>111</div>)
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
      .item {
        margin-bottom: 100px;
        .item-one-box {
          .item-one-box-card {
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
              padding: 70px 60px;
              background: linear-gradient(0deg, rgba(246, 247, 255, 0) 0%, #f6f7ff 100%);
              &:nth-child(2) {
                background: linear-gradient(180deg, rgba(246, 247, 255, 0) 0%, #f6f7ff 100%);
              }
              &:nth-child(5) {
                background: linear-gradient(180deg, rgba(246, 247, 255, 0) 0%, #f6f7ff 100%);
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
        }
      }
    }
  }
}
</style>
