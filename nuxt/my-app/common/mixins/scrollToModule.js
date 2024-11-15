export default {
  computed: {
    target () {
      return this.$route.hash
    }
  },
  watch: {
    target () {
      this.scrollToModule()
    }
  },
  mounted () {
    this.scrollToModule()
  },
  methods: {
    scrollToModule () {
      if (this.target) {
        this.scrollToAppointItem(this.target)
      }
    },
    // 滚动函数
    async scrollToAppointItem (name) {
      this.$nextTick(() => {
        const dom = document.querySelector(name);
        // 获取dom元素到顶部的距离 滚动到此元素处
        if (dom) {
          requestAnimationFrame(() => {
            // // 获取元素到顶部的距离 - 顶部导航栏高度
            // const elementTop = dom.getBoundingClientRect().top + window.scrollY - 160;
            // // 滚动到该元素处
            // window.scrollTo({
            //   top: elementTop,
            //   behavior: 'smooth'
            // });
            return dom.scrollIntoView({ block: 'center', behavior: 'smooth' })
          })
        }
      })
    }
  }
}
