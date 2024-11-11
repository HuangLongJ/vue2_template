import { loadCTA } from '@/common/utils/loadCTA.js';
export default {
  data () {
    return {
      ctaInstance: null, // cta实例
      ctaReady: false
    }
  },
  mounted () {
    this.initCta()
  },
  methods: {
    /**
     * 初始化cta
     * @param {boolean} autoTrigger 加载完成是否自动触发cta
     */
    async initCta (autoTrigger = false) {
      if (!window.JingCTASDK) {
        await loadCTA()
      }
      if (this.ctaInstance) return
      const ctaSdkConfig = {
        ctaId: "00f12ed419bc4effb54136c60eb45dfe",
        customPrivacyProps: {
          zIndex: 20000
        },
        formConfig: {
          dialog: true,
        },
      }
      this.ctaInstance = new window.JingCTASDK(ctaSdkConfig)
      // cta初始化
      this.ctaInstance.onReady(({ ctaSid, ctaDetail }) => {
        this.ctaSid = ctaSid
        this.ctaReady = true
        if (autoTrigger) {
          this.ctaInstance.start()
        }
      })
      // cta完成
      this.ctaInstance.onComplete = () => {

      }
    },
  },
}
