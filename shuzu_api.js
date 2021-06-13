//数组API的使用

//第一部分：将数组连接成字符串
var array=['h','e','l','l','o'];
var newarray=array.join("");
console.log(newarray);      
//使用 数组名.join("自定义连接符")，可以实现将数组的元素使用自定义连接符进行合并
var newarray$=array.join("-");
console.log(newarray$);
//使用  数组名.join("自定义连接符"),可以实现将字母无缝连接为单词，也可以将单词连接成句子
var words=new Array('hello', 'everybody','in','here');
var sentence=words.join(" ");
console.log(sentence+'!');

//------------------
//数组元素的拼接
var array1=[23,343 ,56,67];
var array2=[12,89];
var array3=['hello','my','love'];
var array4=array1.concat(777,array2,array3);
console.log(array4);
//数组名.concat(拼接元素，拼接元素)的使用方法：
//该方法通过返回一个新数组的形式，将需要拼接的元素和原来的数组进行拼接
// 如果拼接元素本身是一个数组，则将数组中内容“打散”在进行拼接

//----------------------------
//数组元素的选取
var array5=[45,67,89,100,210,'hello',123];
var arraychoose=array5.slice(1,6);
var arraychoose$=array5.slice(-5,-1);
console.log(arraychoose);
console.log(arraychoose$);
//使用数组名.slice(a,b)的时候，也同样是返回一个新数组
//从原数组选取的值属于[a,b-1]区间


// 数组元素的修改和替换

var arrayalt=[21,31,41,51,61,71];
var deletes=arrayalt.splice(2,2);//删除,deletes 数组保存的是删除下去的元素
console.log(deletes);
console.log(arrayalt);
var array7=[45,55,65,75,85];
var arraychange=array7.splice(1,2,22,33,44);//替换， arraychange 数组保存的是被替换下去的元素
console.log(arraychange);
console.log(array7);
//数组名.splice(a,n,***)的用法：
//a是指起始元素的位置，n是指从该位置元素开始删除几个，***是指删除后替代的元素
//同理，插入就是让n=0
var array8=[13,33,53,73];
var inserts=array8.splice(1,0,[10,20]);
console.log(array8);
//插入，就是使n=0，令插入的元素做a位置的元素