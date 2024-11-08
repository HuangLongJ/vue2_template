// ~/plugins/vue-i18n.js
import Vue from 'vue'
import VueI18n from 'vue-i18n'
import ElementLocale from 'element-ui/lib/locale'
import messages from '@/i18n'
Vue.use(VueI18n)

const dateTimeFormats = {
  'en': {
    long: {
      year: 'numeric',
      month: 'short',
      day: '2-digit',
      second: 'numeric',
      hour: 'numeric',
      minute: 'numeric',
      hour12: false
    },
    short: {
      year: 'numeric', month: 'short'
    }
  },
  'zh': {
    long: {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      second: 'numeric',
      hour: 'numeric',
      minute: 'numeric',
      hour12: false
    },
    short: {
      year: 'numeric', month: 'short'
    }
  }
}

const lang = 'zh'

export default ({ app, store }) => {
  const i18n = new VueI18n({
    dateTimeFormats,
    locale: lang,
    fallbackLocale: 'en',
    messages,
  })
  ElementLocale.i18n((key, value) => i18n.t(key, value))
  app.i18n = i18n
}
