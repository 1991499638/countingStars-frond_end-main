import axios from 'axios';
import { Toast } from 'antd-mobile';
import { BASE_URL, TIMEOUT } from "./config";


const service = axios.create({
  baseURL: BASE_URL,
  timeout: TIMEOUT,
});


// http request 拦截器
service.interceptors.request.use(config => {
  const token = localStorage.getItem('jwt')
  if (token) {
    config.headers = {
      'token': token,
    };
  }
  return config;
}, err => {
  //...关闭加载loading的组件，显示消息提示弹窗
  console.log("ERR:" + err);
  return err;

});

// http response 拦截器
service.interceptors.response.use(res => {
  if (res.data.msg !== "查询成功" && "") {
    Toast.show({
      content: res.data.msg
    })
  }
  return res;
}, err => {
  if (err && err.response) {
    switch (err.response.status) {
      case 400:
        console.log("请求错误");
        break;
      case 401:
        console.log("未授权访问");
        break;
      default:
        console.log("其他错误信息");
    }
    console.log(err.response.data.msg);
    if (err.response.data.msg == "登陆失败") {
      Toast.show({
        content: err.response.data.data
      })
    } else {
      if(err.response.data.msg !== "查询失败"){
        Toast.show({
          content: err.response.data.msg
        }) 
      } 
    }
  }
  return err;
});


export default service;
