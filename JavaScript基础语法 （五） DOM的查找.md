# JavaScript基础语法（五） DOM的查找

## 示例代码

```javascript

    <ul id="textsearch">
        <li id="w1">hello</li>
        <li id="w2">mylove</li>
        <li id="w3">!</li>
    </ul>
       
    <div class='box'>Good job</div>
<div id='hellom'>
    <div class='box1'>第一行</div>
    <div class='box2'>第二行次</div>
    <div class='box3'>第三行</div> 
</div>

<div id='hellomy'>
    <div class='box'>第一行</div>
    <div class='box'>第二行次</div>
    <div class='box'>第三行</div> 
</div>
```

 ## DOM操作

1. 直接通过ID进行选择

   ```javascript
   var ul=document.getElementById("textsearch");//直接通过ID进行精确查找，效率最高
   console.log(ul);
   ```

2. 通过获取父标签，以子标签名进行寻找

   ```javascript
   var ulli=document.getElementById('textsearch');//获取父标签
   var ullison=ul.getElementsByTagName('li')[1];//通过先获取父标签下内容，再通过子标签名进行搜索，如果子标签有多个，可在后面加上下标
   console.log(ullison);
   ```

3. 通过各类选择器进行选择

   ```javascript
   var divsearch=document.querySelector('.box');//通过选择器进行查找，支持所有类型的选择器
   console.log(divsearch);
   //如果使用的是querySelector（），则只选择有同名选择器的第一个，如果使用querySelecorAll（）则是选所有，但是如果想选出第几个，可加下标
   ```

4. 直接通过类名进行查找

   ```javascript
   var divt=document.getElementsByClassName('box');//直接通过类名进行查找,可以选出所有
   console.log(divt);
   ```

## 关于innerHTML的使用方法

innerHTML的使用一共有两种、

1. 获取元素

   ```javascript
    <div id='first'>利用innerHTML获取内容</div>
   alert(document.getElementById('first').innerHTML);
   ```

2. 添加元素

   ```javascript
    var stringin='利用innerHTML添加';
    var output=document.getElementById('second').innerHTML=stringin;
    console.log(output);
    
   ```

   ### 特别注意

   利用 ` document.getElementByClassName ` 进行按类名进行查找时，返回的是一个object对象类型，无法获取具体内容

   ```javascript
   var divt=document.getElementsByClassName('box');//直接通过类名进行查找,可以选出所有
   console.log(typeof(divt));
   ```

   如果需要获取具体内容，需要将其转化为数组类型

   ```javascript
   var divs=document.getElementById('hellom');
   var nus=divs.getElementsByClassName('box2')[0].innerHTML;
   console.log(nus);
   ```

   ## 利用DOM查找写一个建议的验证码产生

   ```html
   <!DOCTYPE html>
   <html lang="en">
   <head>
       <meta charset="UTF-8">
       <meta http-equiv="X-UA-Compatible" content="IE=edge">
       <meta name="viewport" content="width=device-width, initial-scale=1.0">
       <title>随机数生成</title>
       <style>
           #area{
               width:200px;
               height:100px;
               font-size:40px;
               letter-spacing:10px;
               
           };
       </style>
   </head>
   <body>
   
       <div id='area'></div>
       <button onclick='creat()'>产生4位验证码</button>
       <script>
          //定义 获取验证码功能的函数
          function creat(){
              var array=new Array (1,2,3,4,5,6,7,'s','a','z','l','p');
              var putout_String="";
              for(var i=0;i<4;i++){
                  var numPosition=Math.floor(Math.random()*(array.length-1));
                  putout_String += array[numPosition];//字符串的加也可以用+=运算符
              }
              document.getElementById('area').innerHTML=putout_String;//利用innerHTML的添加功能
          }
           
       </script>
   </body>
   </html>
   ```

   

   

   

   

   