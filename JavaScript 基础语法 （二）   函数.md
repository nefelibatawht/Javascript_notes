# JavaScript 基础语法(二) 函数

```javascript
//关于函数
//函数的声明
var letter=98;
function newfunc(){
    console.log("hello world! \n");
    console.log('1234');
}
newfunc();

//全局变量和局部变量
function quanju(b){
    console.log(letter);//如果局部没有声明某个和全局变量同名的变量，则这个变量就是全局变量，可以对他执行各种操作
    letter++;
}
quanju(letter);
console.log(letter);

var m,n;
m=prompt("请输入值");
n=prompt("请输入值");//注意prompt（）输入的全是字符串，需要进行转换
m=parseInt(m);
n=parseInt(n);
//带参数的和具有返回值的函数
function fanhuizhi(a,b){
    var letter=a+b;
    console.log(letter);
    return letter;
}
var c=fanhuizhi(m,n);
console.log(c);
```

