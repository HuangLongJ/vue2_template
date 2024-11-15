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
          src: '/images/logo/introduceTwologo1.png',
          title: 'Marketing Automation',
          tip: 'Comprehensive marketing tools, automated task creation, data-driven marketing decisions, and efficient conversion of potential customers into deals'
        },
        {
          src: '/images/logo/introduceTwologo2.png',
          title: 'Sales Engage',
          tip: 'An all-in-one sales tool that facilitates data transfer between marketing and sales, and manages real-time interaction between businesses and customers'
        },
        {
          src: '/images/logo/introduceTwologo3.png',
          title: 'Omni Social',
          tip: 'Integrate global social media platforms for unified content management, distribution, interaction, and analysis'
        },
        {
          src: '/images/logo/introduceTwologo4.png',
          title: 'Al Suite',
          tip: 'Intrgrating the latest AI technology and applications to efficiently manage marketing activities, saving time and resources'
        },
        {
          src: '/images/logo/introduceTwologo5.png',
          title: 'AppMart',
          tip: 'Allows easy intragration of innovative 3rd party B2B marketing solutions and applications'
        },
        {
          src: '/images/logo/introduceTwologo6.png',
          title: 'CDP',
          tip: 'Help businesses better understand customer behavior, preferences, and needs in order to develop more effective marketing and sales strategies'
        },
      ]
    },
    imgRender () {
      return (img) => (
        <div class="item-box-img">
          <img src={img} />
        </div>
      )
    },
    btnRender () {
      return () => (
        <btnBtns class="item-box-btns" />
      )
    },
    listRender () {
      return ({ list = this.list }) => (
        list.map((item, index) => (
          <div class="item-box-item" key={index}>
            <div class="item-box-item-img">
              <img src={item.src} />
            </div>
            <div class="item-box-item-title medium-title">
              {item.title}
            </div>
            <div class="item-box-item-tip medium-title-tip">
              {item.tip}
            </div>
          </div>
        ))
      )
    },
    moduleData () {
      return [
        {
          leftRender: (
            <div class="item-box">
              {this.imgRender('/images/components/homePage/introduceTwoItem1.png')}
              {this.btnRender()}
            </div>
          ),
          rightRender: (
            <div class="item-box">
              {this.listRender({ list: this.list.slice(0, 3) })}
            </div>
          )
        },
        {
          leftRender: (
            <div class="item-box">
              {this.listRender({ list: this.list.slice(3) })}
            </div>
          ),
          rightRender: (
            <div class="item-box">
              {this.imgRender('/images/components/homePage/introduceTwoItem2.png')}
              {this.btnRender()}
            </div>
          )

        }
      ]
    },
  },
  asyncData (data) {

  },
  mounted () {

  },
  methods: {

  },
  render () {
    return (
      <div class="box container-box">
        <div class="content container-content">
          <div class="title big-title">Enhance customer experience and create tangible business results</div>
          <div class="tip big-title-tip">
            Assist B2B enterprises in managing and monetizing their marketing assets
          </div>

          <div class='list'>
            {
              this.moduleData.map((item, index) => (
                <div class="item" key={index}>
                  {item.leftRender}
                  {item.rightRender}
                </div>
              ))
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
  background: #f6f7ff;
  background-blend-mode: darken;
  .content {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    .title {
      margin-bottom: 30px;
    }
    .tip {
      margin-bottom: 90px;
    }
    .list {
      .item {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-gap: 100px;
        &:first-child {
          margin-bottom: 100px;
        }
        .item-box {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: space-between;
          .item-box-img {
            width: 532px;
            height: 542px;
          }
          .item-box-btns {
            margin-top: 60px;
          }
          .item-box-item {
            margin-bottom: 53px;
            &:last-child {
              margin-bottom: 0;
            }
            .item-box-item-img {
              width: 55px;
              height: 55px;
              margin-bottom: 18px;
            }
            .item-box-item-title {
              margin-bottom: 8px;
              font-size: 28px;
              line-height: 40px;
            }
            .item-box-item-tip {
              line-height: 33px;
            }
          }
        }
      }
    }
  }
}
@include phone {
  .box {
    .content {
      .list {
        .item {
          grid-template-columns: repeat(1, 1fr);
          &:first-child {
            display: flex;
            flex-direction: column-reverse;
          }
          .item-box {
            .item-box-item {
              display: flex;
              flex-direction: column;
              align-items: center;
              margin-bottom: 60px;
              .item-box-item-img {
                width: 75px;
                height: 75px;
                margin-bottom: 30px;
              }
              .item-box-item-title {
                margin-bottom: 20px;
              }
            }
          }
        }
      }
    }
  }
}
</style>
