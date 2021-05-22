# JavaScript 基础语法（一） 数据类型

```javascript
//数据类型的隐式转换
var num=123;
var character="1234你好21";
//强制类型转换为string类型
num.toString();
document.write(num.toString());
//获取字符串的整数部分
var hash=parseInt(character);
document.write(hash);//输出字符串中第一个非数字字符前的字符组成的整数
var hanzi="你好2021"
var hash$=parseInt(hanzi);
document.write(hash$);//字符串第一个字符就不是整数输出NaN
console.log(isNaN(hanzi));//判断变量是否是“非数字”，返回true或false
var m=isNaN(num);
document.write(m)
var s=typeof(character);//获取变量的数据类型（返回number string等）
document.write(s);
//string与num类型相加是string类型
var nullelegent;
var z=typeof(nullelegent);
document.write(z);
console.log(num+hanzi);
var x=num+hanzi;
console.log(typeof(x));

var input=prompt("请输入一个数字");
console.log(isNaN(input));
```

