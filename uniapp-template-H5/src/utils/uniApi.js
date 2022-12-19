let userAgent = window.navigator.userAgent.toLowerCase();
//检查是否在微信中
export const checkInWX = () => {
  return /(MicroMessenger)/i.test(userAgent);
};

//检查是否在微信小程序中
export const checkInMiniProgram = () => {
  return window.__wxjs_environment === 'miniprogram';
};

//检查是否在支付宝浏览器中
export const checkInAlipay = () => {
  return /(Alipay)/i.test(userAgent);
};

//检查是否在IOS中
export const checkInIOS = () => {
  return /(iPhone|iPad|iPod|iOS)/i.test(userAgent);
};

//检查是否在Android中
export const checkInAndroid = () => {
  return /(Android)/i.test(userAgent);
};

//为-app页面 检查是否在Yhouse APP中
export const checkInApp = () => {
  return /(yhouseappversion|yhmainapp)/i.test(userAgent);
};

//检查是否在云闪付 APP中
export const checkInCloudPay = () => {
  return /(UnionPay|CloudPay)/i.test(userAgent) && !/(jdjr)/i.test(userAgent);
};

// 加载
export const loading = {
  open: (msg) => {
    uni.showLoading({
      title: msg,
    });
  },
  close: () => {
    uni.hideLoading();
  },
};

// 隐藏头部
export const hiddenHeader = () => {
  if (checkInWX()) {
    document.querySelector('body').style.setProperty('--display', 'none');
    document.querySelector('body').style.setProperty('--minHeight', '100vh');
  }
};
