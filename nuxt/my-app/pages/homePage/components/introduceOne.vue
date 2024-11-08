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
          src: require('/static/images/components/homePage/introduceOneItem1.png'),
          title: 'Social media based engagement',
          tip: 'Integrate major social media platforms globally to construct more comprehensive customer profiles and customer data'
        },
        {
          src: require('/static/images/components/homePage/introduceOneItem2.png'),
          title: 'Real-time personalization',
          tip: 'Leverage social messaging capabilities, providing customers with more personalized interactive experiences, enhancing customer satisfaction and loyalty'
        },
        {
          src: require('/static/images/components/homePage/introduceOneItem3.png'),
          title: 'Marketing and sales alignment',
          tip: 'Unleash power of marketing data and create tangible business impact with powerful product suit connecting marketing and sales'
        },
        {
          src: require('/static/images/components/homePage/introduceOneItem4.png'),
          title: 'AI Driven',
          tip: 'Increase productvity of marketing teams and reduce cost using AI-enabled product features in core marketing functions '
        }
      ]
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
      <div class="box container-box">
        <div class="content container-content">
          <div class="title big-title">Our advantages</div>
          <div class="tip big-title-tip">
            Key innovations help you achieve break-through with more comprehensive arketing data and organizational
            alignment
          </div>
          <btnBtns class="btns" />
          <div class="list">
            {
              this.list.map((item, index) => (
                <div class="list-item" key={index}>
                  <div class="list-item-img">
                    <img src={item.src} />
                  </div>
                  <div class="list-item-title small-title">
                    {item.title}
                  </div>
                  <div class="list-item-tip small-title-tip">
                    {item.tip}
                  </div>
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
    .list {
      display: grid;
      grid-template-columns: repeat(4, minmax(160px, 252px));
      grid-gap: 40px;
      .list-item {
        overflow: hidden;
        border-radius: 20px;
        background: #ffffff;
        box-shadow: 0px 4px 20px 0px rgba(210, 215, 228, 0.5);
        .list-item-img {
          height: 192px;
        }
        .list-item-title {
          padding: 0 16px;
          margin-top: 48px;
        }
        .list-item-tip {
          padding: 0 16px;
          margin-top: 30px;
          margin-bottom: 48px;
        }
      }
    }
  }
}
@include phone {
  .box {
    .content {
      .list {
        grid-template-columns: repeat(1, 1fr);
        grid-gap: 60px;
        .list-item {
          .list-item-img {
            height: 400px;
          }
          .list-item-title {
            padding: 0 39px;
          }
          .list-item-tip {
            padding: 0 39px;
            margin-top: 24px;
            margin-bottom: 43px;
          }
        }
      }
    }
  }
}
</style>
