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
// import scrollToModule from '@/common/mixins/scrollToModule.js';
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
  mounted () {
  },
  computed: {
  },
  methods: {
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
  min-height: 100vh;
  overflow: auto;
  position: relative;
  font-family: Uni Neue;
  letter-spacing: 0px;
  scroll-behavior: smooth;
}
</style>
