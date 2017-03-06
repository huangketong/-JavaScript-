/*****
    计算当前的日期
 ******/

// method 1
  //new Date()  返回当前的日期 :Mon Feb 20 2017 10:15:21 GMT+0800 (中国标准时间)
 //getDay() 从 Date 对象返回一周中的某一天 (0 ~ 6)
 //getMonth()  从 Date 对象返回月份 (0 ~ 11)
var a = new Array('日','一','二','三','四','五','六');
var week = new Date().getDay();  //此处返回一个 0---6 的一个数字
var str = "今天是星期" + a[week];
console.log(str);


// method 2
  // charAt() 方法可返回指定位置的字符  stringObject.charAt(index)
var str = "今天是星期" + "日一二三四五六".charAt(new Date().getDay());
console.log(str);


// 把时间戳转换为时间格式
function formatDate(now)   {     
    var	year=now.getFullYear();     
    var	month=now.getMonth()+1;     
    var	date=now.getDate();     
    var hour=now.getHours();     
    var minute=now.getMinutes();     
    var second=now.getSeconds();     
    return   year+"-"+month+"-"+date+" "+hour+":"+minute+":"+second;     
}     
var d = new Date(1230999938);  //  d = Thu Jan 15 1970 13:56:39 GMT+0800 (中国标准时间) 
console.log(formatDate(d));   // 1970-1-15 13:56:39


function getLocalTime(nS) {     
   return new Date(parseInt(nS) * 1000).toLocaleString().replace(/:\d{1,2}$/,' ');     
}     
console.log(getLocalTime(1293072805));

