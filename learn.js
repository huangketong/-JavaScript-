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


// 遍历数组
// ES6 引入：for…of 
var arr = [1,3,5];
for(let value of arr){
    console.log(value);
}
// Array.prototype.forEach()： 对数组的每个元素执行一次提供的函数
// Array.prototype.forEach(callback(currentValue, index, array){
//     // do something
// }[,thisArg]);
arr.forEach((i)=>{
	console.log(i);
});

/***
	面试题
***/
function Foo() {
    getName = function () { alert (1); };
    return this;
}
Foo.getName = function () { alert (2);};
Foo.prototype.getName = function () { alert (3);};
var getName = function () { alert (4);};
function getName() { alert (5);}

/** 声明提前
function Foo() {
    getName = function () { alert (1); };
    return this;
}
var getName;//只提升变量声明
function getName() { alert (5);}//提升函数声明，覆盖var的声明

Foo.getName = function () { alert (2);};
Foo.prototype.getName = function () { alert (3);};
getName = function () { alert (4);};//最终的赋值再次覆盖function getName声明

getName();//最终输出4
**/


//答案：
Foo.getName();//2
getName();//4
Foo().getName();//1
getName();//1
new Foo.getName();//2
new Foo().getName();//3
new new Foo().getName();//3