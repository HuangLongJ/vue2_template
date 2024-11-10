
const statusKey = 'loadStatus'
export function loadScript (url, id) {
  return new Promise((resolve, reject) => {
    let script = id ? document.getElementById(id) : null
    if (script) {
      const status = script.getAttribute(statusKey)
      switch (status) {
        case 'failed':
          script.parentNode.removeChild(script)
          script = document.createElement('script')
          break
        case 'loaded':
          resolve(script.loadEvent)
          return
        default:
      }
    } else {
      script = document.createElement('script')
    }
    script.setAttribute(statusKey, 'pending')
    script.src = url
    script.addEventListener('load', (ev) => {
      script.loadEvent = ev
      script.setAttribute(statusKey, 'loaded')
      resolve(ev)
    })
    script.addEventListener('error', (err) => {
      script.setAttribute(statusKey, 'failed')
      reject(err)
    })
    script.id = id
    document.head.appendChild(script)
  })
}

let sdkLoadPms = null
const sdkDependencies = [
  { url: '/open/js/jingCTA/1.0.0/sdkEntry.js', required: true, id: 'jingCTAEntry' }
]
export function loadCTA () {
  if (sdkLoadPms) return sdkLoadPms
  const arr = sdkDependencies.map((item) => ({
    ...item,
    url: 'https://dev.jingsocial.com' + item.url
  }))

  const pmsArr = arr.map((config) => {
    const pms = loadScript(config.url, config.id)
    return config.required ? pms : pms.catch(() => Promise.resolve())
  })
  sdkLoadPms = Promise.all(pmsArr).then(() => window.JingCTASDK)
  return sdkLoadPms
}
