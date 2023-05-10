import service from './request'
// 首页展示
export const collectionList = () => service.post("/collection/queryAll")
// 展示藏品信息（通过藏品名称查询藏品信息）
export const collectionDetail = (params: Star) => service.post("/collection/queryAll", params)
//密码登录 
export const loginPwd = (params: LoginPwdReq) => service.post("/login/pwd", params)
//获取登录验证码
export const getCode = (params: getCodeReq) => service.post("/login/getCode", params)
//验证码登录
export const loginCode = (params: LoginCodeReq) => service.post("/login/code", params)

//通过类id查询 某一类藏品的信息[id].tsx
export const selectCatByid = (params: {kind_id: string}):any => service.post("/collection/kindIdQuery",params)

//通过id查询藏品信息
export const selectByid = (params: selectByidReq) => service.post("/collection/idQuery", params)
//通过藏品名称查询藏品信息
export const selectByname = (params: selectBynameReq):any => service.post("/collection/nameQuery", params)
// 展示已拥有(通过用户地址查询指定用户的所有藏品)
export const ownedcollection = () => service.post("/collection/queryUser")
// 我的页面展示
export const userInfo = () => service.post("/account/getUserInfo")
// 修改头像
export const changePicture = (params: FormData) => service.post("/account/uploadPicture", params, {
    headers: {
        'Content-type': 'multipart/form-data'
    }})
// 修改昵称
export const changeName = (params: changeNameReq) => service.post("/account/changeName", params)
// 修改手机号
export const changePhoneNum = (params: changePhoneReq) => service.post("account/changePhone", params)
// 获取更改绑定手机号验证码
export const getphoneCode = (params: getPhoneCodeReq) => service.post("/account/getChangePhoneCode", params)
// 修改密码
export const changepwd = (params: changePwdReq) => service.post("/account/changePWD", params)
//获取修改密码验证码
export const getChangepwd = () => service.post("/account/getChangePWDCode")
//兑换藏品
export const redeemCollection = (params: redeemReq) => service.post("/collection/redeem", params)
//兑换藏品
export const getqueryRecords = () => service.post("/collection/queryRecords")

