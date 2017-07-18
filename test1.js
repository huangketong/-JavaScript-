
function Person(name, age) {
    this.name = name;
    this.age = age;
}

function Student(name, age, grade) {
    Person.apply(this, arguments);
    this.grade = grade;
}

function Student1(name, age, grade) {
    Person.call(this, name, age);
    this.grade = grade;
}

var student = new Student("小强", '21', '一年级');
console.log(student);

var student1 = new Student1('小明', '25', '四年级');
console.log(student1);

var foo = 10;
foo == 10 && console.log("执行"); //等价于 if(foo == 10) console.log("执行");
if (foo == 10) console.log("执行");
foo == 5 || console.log("执行啦"); //等价于 if(foo != 5) console.log("执行啦");
if (foo != 5) console.log("执行啦");

var str = 'joyowo';
for (let i = 0; i < str.length; i++) {
    console.log(str[i]);
}

var obj1 = {
	a: '1',
	b: '2'
}
var obj2 = {
	c: '3'
}


obj2 = Object.assign(obj1,obj2);
// obj2 = {...obj2,...obj1} 需要es6编译
console.log(obj2);

// Fullscreen 通用的页面全屏方法
  function toggleFullScreen() {
    if ((document.fullScreenElement && document.fullScreenElement !== null) ||
      (!document.mozFullScreen && !document.webkitIsFullScreen)) {
      if (document.documentElement.requestFullScreen) {
        document.documentElement.requestFullScreen();
      } else if (document.documentElement.mozRequestFullScreen) {
        document.documentElement.mozRequestFullScreen();
      } else if (document.documentElement.webkitRequestFullScreen) {
        document.documentElement.webkitRequestFullScreen(Element.ALLOW_KEYBOARD_INPUT);
      }
    } else {
      if (document.cancelFullScreen) {
        document.cancelFullScreen();
      } else if (document.mozCancelFullScreen) {
        document.mozCancelFullScreen();
      } else if (document.webkitCancelFullScreen) {
        document.webkitCancelFullScreen();
      }
    }
  }
