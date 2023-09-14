function toShadowDom (el, htmlText, styleText = '') {
  let shadowRoot
  if (el.__vue_shadow_root__) {
    shadowRoot = el.__vue_shadow_root__
  } else {
    shadowRoot = el.attachShadow({ mode: 'closed' })
    el.__vue_shadow_root__ = shadowRoot
  }
  shadowRoot.innerHTML = htmlText
  if (styleText) {
    // 给富文本添加样式
    const style = document.createElement('style')
    style.textContent = styleText
    shadowRoot.appendChild(style)
  }
}

function handleBindingVal (binding) {
  let htmlText, styleText
  if (binding.value !== null && binding.value !== undefined && typeof binding.value === 'object') {
    htmlText = binding.value.htmlText || ''
    styleText = binding.value.styleText || ''
  } else {
    htmlText = binding.value || ''
  }
  return { htmlText, styleText }
}

const richTextDirective = {
  bind (el, binding) {
    const { htmlText, styleText } = handleBindingVal(binding)
    toShadowDom(el, htmlText, styleText)
  },
  update (el, binding) {
    const { htmlText, styleText } = handleBindingVal(binding)
    toShadowDom(el, htmlText, styleText)
  }
}

export default {
  install (Vue) {
    Vue.directive('richText', richTextDirective)
  }
}
