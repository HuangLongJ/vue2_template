import Vue from 'vue';
// import { loadCTA } from '@/common/utils/loadCTA.js'
// loadCTA()
const Global = {
  install (Vue) {
    Vue.prototype.$global = {

    }
  }
}

Vue.use(Global);
