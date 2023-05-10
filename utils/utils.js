// 验证手机号码
export function judgeCellphone(number) {
    const regMobile = /^(?:\+?86)?1(?:3\d{3}|5[^4\D]\d{2}|8\d{3}|7(?:[01356789]\d{2}|4(?:0\d|1[0-2]|9\d))|9[189]\d{2}|6[567]\d{2}|4[579]\d{2})\d{6}$/;
    if (regMobile.test(number)) {
        return;
    }
    return "联系方式格式不正确";
}
// 验证特殊字符
export function checkSpecialKey(str) {
    let specialKey = "[`@~!#$^&*()=|{}':;'\\[\\].<>/?~！#￥……&*（）——|{}【】‘；：”“'。，、？]‘'";
    for (let i = 0; i < str.length; i++) {
        if (specialKey.indexOf(str.substr(i, 1)) != -1) {
            return false;
        }
    }
    return true;
}
// 判断密码
export function passwordValid(pass) {
    let passLower = pass.toLocaleLowerCase();
    let flag = " ";
    if (pass == null || pass.length < 8 || pass.length > 20 || pass.length == "") {
        //$.messager.alert("错误","密码位数不对，长度最少8位，最大20位。");
        flag = "密码位数不对，长度最少8位，最大20位";
        return flag;
    }
    // 是数字
    let isDigit = /^.*[0-9]+.*/;
    // isLowerCase 小写字母
    let isLowerCase = /^.*[a-z]+.*/;
    // isUpperCase 大写字母
    let isUpperCase = /^.*[A-Z]+.*/;
    // 特殊字符
    // let regEx = /^.*[^a-zA-Z0-9]+.*/;
    // 记录匹配的次数
    let num = 0;

    if (isDigit.test(pass)) {
        num = num + 1;
    }

    if (isLowerCase.test(pass)) {
        num = num + 1;
    }

    if (isUpperCase.test(pass)) {
        num = num + 1;
    }

    // if (regEx.test(pass)) {
    //     num = num + 1;
    // }
    if (num <= 2) {
        //$.messager.alert("错误","密码复杂度不足,\n(1)大写字母\n(2)小写字母\n(3)数字\n(4)特殊符号\n密码至少需包含上述情形中的三种.");
        flag = "密码至少需包含下述情形:\n(1)大写字母\n(2)小写字母\n(3)数字";
        return flag;
    }
    return undefined;
}