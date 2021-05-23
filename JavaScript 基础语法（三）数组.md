# JavaScript 基础知识（三）数组

## 索引数组

```javascript
//JavaScript索引数组相关知识

//数组的创建
//方法一
var newarray=[];
//方法二
var newArray=new Array();
//数组的初始化
var selectarray=[34 ,45,56,78,90];
var newarraypro=[3]
newArray[0]='hello';//JS数组不限制数组元素的数据类型
newArray[3]=3567;
newArray[4]='op';//当new一个未指定大小的空数组时，赋值的下标最大值就是数组的长度，比如newArray[]的长度就是4
for (var i=0;i<3;i++)
{
   newarraypro[i]= parseInt(prompt('向数组输入值'));
}
newarraypro[3]=100; //当给越界的数组下标赋值，相当于延长了数组的长度
//数组长度属性
console.log(newArray.length);
console.log(newarraypro.length);
console.log(newArray[6]);//访问越界下标时不会抛出异常,只会出现undefined

//获取一个数组的倒数第n个值
console.log(newArray[newArray.length-1]);
console.log(newArray[newArray.length-5]);
//数组的遍历
for(var count=0;count<selectarray.length;count++){
    console.log(selectarray[count]);
}
for(var counte=0;counte<newArray.length;counte++){
    console.log(newArray[counte]);
}
//数组的缩容

selectarray.length=3;
for (var a=0;a<selectarray.length;a++)
{
    console.log(selectarray[a]);
}
```





## 关联数组

```javascript
//关联数组
//关联数组可以自己定义下标，访问元素效率更高，但是.length属性不再存在，改用for...in...循环进行遍历

var student=new Array();
student['name']='nefelibata';
student['ID']=123;
student['score']=90;
for(var key in student){
    
     console.log(student[key]);
    
}


var newone=['hello' ,43,'people','inclass'];
console.log(newone[1]);
console.log(newone[2]+'\t'+newone[1]);
```

