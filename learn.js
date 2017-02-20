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
