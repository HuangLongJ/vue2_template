<template>
  <div id="app">
    <!-- nav导航 -->
    <navHeader />
    <!-- 路由 -->
    <nuxt></nuxt>
    <!-- 介绍4 -->
    <introduceFour />
    <!-- 底部 -->
    <pageFooter />
  </div>
</template>

<script>
import navHeader from './components/navHeader.vue';
import introduceFour from './components/introduceFour.vue';
import pageFooter from './components/pageFooter.vue';
export default {
  name: "App",
  components: {
    navHeader,
    introduceFour,
    pageFooter
  },
  props: {},
  data () {
    return {};
  },
  created () {

  },
  computed: {},
  methods: {},
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
