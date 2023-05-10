import md5 from "md5";

/**
 * 用MD5给密码加密。
 * @param {string} pwd 要加密的密码。
 * @returns 加密后的密码。
 */
export const encryptPwd = (pwd) => {
    if (typeof pwd !== 'string') {
        throw Error('类型错误！应为字符串。');
    }

    return md5(pwd + 'CSHR');
};