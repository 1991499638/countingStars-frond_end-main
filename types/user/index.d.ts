interface RegisterReq {
    phone: string
    verifiableCode: string
}

interface LoginPwdReq {
    phone: string
    password: string
}

interface LoginCodeReq {
    phone: string
    verifiableCode: string
}
interface changePictureReq {
    formData: FormData
}
interface changeNameReq {
    name: string
}
interface getCodeReq {
    phone: string
}
interface changePhoneReq {
    oldPhone: string
    newPhone: string
    verifiableCode: string
}

interface getPhoneCodeReq {
    phone: string
}

interface changePwdReq {
    password: string,
    verifiableCode: string
}

interface redeemReq {
    redeem_code:string
}
interface userInfoReq {
    Address:string
    NickName: string
    Order: any[]
    Phone: string
    Picture: string
    PublicKey: string
    RealName:string
    StudyId:string
}
interface queryRecords {
    Picture: string
    Hash: string
    Name: string
    Time: string
    ID:Number
}

