<template>
  <div class="page-home">
    <!-- 主题内容 -->
    <mainContent />
    <!-- 介绍一 -->
    <introduceOne />
    <!-- 介绍二 -->
    <introduceTwo />
    <!-- 介绍三 -->
    <introduceThree />
  </div>
</template>

<script>
import mainContent from './components/mainContent.vue';
import introduceOne from './components/introduceOne.vue';
import introduceTwo from './components/introduceTwo.vue';
import introduceThree from './components/introduceThree';
import head from '@/common/head/index.js'
export default {
  name: 'homePage',
  layout: 'App',
  inject: ['root'],
  head () {
    return head(this.$options.name)
  },
  data () {
    return {

    }
  },
  components: {
    mainContent,
    introduceOne,
    introduceTwo,
    introduceThree
  },
  computed: {

  },
  asyncData (data) {

  },
  mounted () {

  },
  methods: {

  }
}
</script>
<style scoped lang="scss">
</style>
