import { loadCTA } from '@/common/utils/loadCTA.js';

export default {
  data () {
    return {
      btnCtas: {
        // Get started free 页面
        freeBtnCTA: {
          ctaInstance: null,
          ctaReady: false,
          pushId: '2TcVisTBKdJEXbeHscP6FC1'
        },
        // TALK TO AN EXPERT 页面
        talkBtnCTA: {
          ctaInstance: null,
          ctaReady: false,
          pushId: '9dgdb2fmeiQkgGWe6G2CiV1',
        },
        // Get a demo 顶部
        navDemoBtnCTA: {
          ctaInstance: null,
          ctaReady: false,
          pushId: 'hJSAeWmgttYBb6pZcBW2j71',
        },
        // Get a demo 底部
        bottomDemoBtnCTA: {
          ctaInstance: null,
          ctaReady: false,
          pushId: 'dXDGS4CzrPPUC4UknwEzrg1',
        },
        // Get a demo 页面
        pageDemoBtnCTA: {
          ctaInstance: null,
          ctaReady: false,
          pushId: 'iJ654d8FnwKiEovknAwnKa1',
        },
        // Appointment to Build 页面
        buildBtnCTA: {
          ctaInstance: null,
          ctaReady: false,
          pushId: '49fEMDhzpvUyDRwzyokiJ1',
        },
      },
    }
  },
  mounted () {
    // 初始化所有cta表单
    this.initCta()
  },
  methods: {
    /**
     * 初始化cta
     * @param {boolean} autoTrigger 加载完成是否自动触发cta
     */
    async initCta () {
      if (!window.JingCTASDK) {
        await loadCTA()
      }
      Object.keys(this.btnCtas).forEach(key => {
        const item = this.btnCtas[key]
        if (item.ctaInstance) return
        const ctaSdkConfig = {
          ctaId: "7a0615067ef6474dbb81a8facc12fb1c",
          pushId: item.pushId,
          formConfig: {
            dialog: true,
          },
        }
        item.ctaInstance = new window.JingCTASDK(ctaSdkConfig)
        item.ctaInstance.onReady(({ ctaSid, ctaDetail }) => { // cta初始化完成
          item.ctaReady = true
          // this.ctaInstance.start()
          // this.ctaInstance.onComplete() // cta完成
        })
      })
    },
    // 启动按钮的cta
    startCtaHandler (e) {
      const btnType = e.target.dataset.btntype
      if (!btnType && !this.btnCtas[btnType] && this.btnCtas[btnType].ctaReady) return
      this.btnCtas[btnType].ctaInstance && this.btnCtas[btnType].ctaInstance.start() // 对应的按钮执行cta
    },
  },
  beforeDestroy () {
    Object.keys(this.btnCtas).forEach(key => {
      const item = this.btnCtas[key]
      item.ctaInstance && item.ctaInstance.destroy()
    })
  },
}
