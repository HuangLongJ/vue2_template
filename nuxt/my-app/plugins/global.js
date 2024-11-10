


(function (doc, win) {
  var docEl = doc.documentElement,
    resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
    recalc = function () {
      var clientWidth = docEl.clientWidth;
      if (!clientWidth) return;
      if (clientWidth >= 768) {
      } else {
        docEl.style.fontSize = 16 * (clientWidth / 768) + 'px';
      }
    };
  if (!doc.addEventListener) return;
  win.addEventListener(resizeEvt, recalc, false);
  doc.addEventListener('DOMContentLoaded', recalc, false);
})(document, window);

import Vue from 'vue';
import { loadCTA } from '@/common/utils/loadCTA.js'
loadCTA()

const Global = {
  install (Vue) {
    Vue.prototype.$global = {

    }
  }
}

Vue.use(Global);
