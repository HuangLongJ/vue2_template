export const rule = {
  /*
    校验手机号
    */
  validatorPhoneNumber(value) {
    const acount2 = /^(?:(?:\+|00)86)?1\d{10}$/; // 弱校验
    const acount1 = /^(?:(?:\+|00)86)?1[3-9]\d{9}$/; // 正常校验
    const acount3 =
      /^(?:(?:\+|00)86)?1(?:(?:3[\d])|(?:4[5-79])|(?:5[0-35-9])|(?:6[5-7])|(?:7[0-8])|(?:8[\d])|(?:9[189]))\d{8}$/; // 强校验
    // 满足正常校验,宽松校验,固话校验都通过
    const arr = [acount1.test(value), acount2.test(value), acount3.test(value)];
    if (value && !arr.includes(true)) {
      return false;
    } else {
      return true;
    }
  },
  /*
    校验二代身份证
    */
  validatorIdentityCard(value) {
    const acount =
      /^[1-9]\d{5}(?:18|19|20)\d{2}(?:0[1-9]|10|11|12)(?:0[1-9]|[1-2]\d|30|31)\d{3}[\dXx]$/;
    if (value && !acount.test(value)) {
      return false;
    } else {
      return true;
    }
  },
  /*
    校验银行账号
    */
  validatorBankAccount(value) {
    const acount = /^[1-9]\d{9,29}$/;
    if (value && !acount.test(value)) {
      return false;
    } else {
      return true;
    }
  },
  /* 
  校验验证码6位数
  */
  validatorCode(value) {
    const acount = /^\d{6}/;
    if (value && !acount.test(value)) {
      return false;
    } else {
      return true;
    }
  },
};
