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


/******
     原生js学习
 * ******/ 
// 数据类型
// 基本类型值包括： undefined，null，Boolean，Number和String，这些类型分别在内存中占有固定的大小空间，它们的值保存在栈空间，我们通过 按值 来访问的。 

// 引用类型包括：对象、数组、函数等。 
// 对于引用类型的值，则必须在堆内存中为这个值分配空间。
    // 由于引用类型值的大小不固定（对象有很多属性和方法，而且还可以动态的添加属性和方法），因此不能把他们保存到栈内存中。但内存地址大小是固定的，因此可以将内存地址保存在栈内存中。

// 简而言之：栈内存中存放的是基本数据类型值，堆内存中存放的是引用类型值，引用类型值在内存中的地址存放在栈中，也就是我们常说的对象对象引用(指针)。 