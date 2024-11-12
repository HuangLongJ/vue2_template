<template>
  <div id="app">
    <!-- nav导航 -->
    <navHeader @navigationTo="navigationTo" />
    <!-- 路由 -->
    <nuxt></nuxt>
    <!-- 介绍4 -->
    <introduceFour />
    <!-- 底部 -->
    <pageFooter @navigationTo="navigationTo" />
  </div>
</template>

<script>
import navHeader from './components/navHeader.vue';
import introduceFour from './components/introduceFour.vue';
import pageFooter from './components/pageFooter.vue';
import initCta from '@/common/mixins/initCta.js';
import _ from 'lodash'
export default {
  name: "App",
  components: {
    navHeader,
    introduceFour,
    pageFooter
  },
  mixins: [initCta],
  provide () {
    return {
      root: this
    }
  },
  props: {},
  data () {
    return {

    };
  },
  async mounted () {
    await this.$nextTick()
    Array.from(document.querySelectorAll('button')).forEach((item) => {
      item.addEventListener('click', () => {
        if (!this.ctaReady) {
          alert('cta还未加载完成')
        }
        this.startCtaHandler()
      })
    })
  },
  computed: {},
  methods: {
    startCtaHandler () {
      this.ctaInstance && this.ctaInstance.start()
    },
    // 头部尾部导航跳转
    navigationTo (data) {
      this.$router.push(data)
    }
  },
};
</script>
<style scoped lang="scss">
#app {
  width: 100%;
  min-width: 1000px;
  min-height: 100vh;
  overflow: auto;
  position: relative;
  font-family: Uni Neue;
  letter-spacing: 0px;
  @include phone {
    min-width: 0;
  }
}
</style>
