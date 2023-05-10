function formatTime(utc_datetime) {
  // 转为正常的时间格式 年-月-日 时:分:秒
  var new_datetime =
    utc_datetime.split('T')[0] + ' ' + utc_datetime.split('T')[1].split('.')[0];
  // 处理成为时间戳
  timestamp = new Date(Date.parse(new_datetime));
  timestamp = timestamp.getTime();
  timestamp = timestamp / 1000;
  // 增加8个小时，北京时间比utc时间多八个时区
  var timestamp = timestamp + 8 * 60 * 60;
  // 时间戳转为时间
  var n = parseInt(timestamp) * 1000;
  var D = new Date(n);
  var year = D.getFullYear(); //四位数年份
  var month = D.getMonth() + 1; //月份(0-11),0为一月份
  month = month < 10 ? '0' + month : month;
  var day = D.getDate(); //月的某一天(1-31)
  day = day < 10 ? '0' + day : day;
  var hours = D.getHours(); //小时(0-23)
  hours = hours < 10 ? '0' + hours : hours;
  var minutes = D.getMinutes(); //分钟(0-59)
  minutes = minutes < 10 ? '0' + minutes : minutes;
  var seconds = D.getSeconds(); //秒(0-59)
  seconds = seconds < 10 ? '0' + seconds : seconds;
  var beijing_datetime = year + '-' + month + '-' + day;
  return beijing_datetime; // 2020-10-11 15:32:06
}

export default formatTime;
