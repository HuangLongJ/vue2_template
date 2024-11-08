<script>
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'

export default {
  name: 'paginationSwiper',
  components: {
    Swiper,
    SwiperSlide
  },
  props: {
    swiperSlideRender: {
      type: Array,
      // default: () => ([{ render: <div>slide1</div> }])
      default: () => ([])
    }
  },
  data () {
    return {
      swiperOption: {
        effect: 'coverflow',
        centeredSlides: true, // 居中显示
        slidesPerView: 'auto', // 展示的个数
        loop: true,
        spaceBetween: 78, // 间距
        coverflowEffect: {
          rotate: 0, // 旋转角度
          stretch: 0, // 拉伸
          depth: 80, // 深度
          modifier: 1, // 修改器
          slideShadows: false // 阴影
        },
        pagination: {
          el: '.swiper-pagination',
          bulletClass: 'my-bullet',
          bulletActiveClass: 'my-bullet-active',
          clickable: true,
        }
      }
    }
  },
  render () {
    return (
      <div class="components-swiper">
        <swiper class="swiper" options={this.swiperOption}>
          {
            this.swiperSlideRender.map((item, index) => (
              <swiper-slide key={index}>{item.render}</swiper-slide>
            ))
          }
          <div class="swiper-pagination" slot="pagination"></div>
        </swiper>
      </div>
    )
  }
}
</script>

<style lang="scss" scoped>
.components-swiper {
  width: 100%;
}
.swiper {
  height: 100%;
  width: 100%;
  padding-bottom: 60px;
  .swiper-slide {
    width: fit-content;
  }
  .swiper-pagination {
    bottom: 0;
    ::v-deep {
      .my-bullet {
        display: inline-block;
        width: 82px;
        height: 8px;
        border-radius: 4px;
        background: #f4f4f4;
        margin-right: 20px;
        cursor: pointer;
        &:last-child {
          margin: 0;
        }
        &.my-bullet-active {
          background-color: #8847ff;
        }
      }
    }
  }
}
</style>
