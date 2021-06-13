//DOM
//DOM是对网页进行增删查改

//按照ID进行高效率的精确查找
var ul=document.getElementById("textsearch");
console.log(ul);
var ulli=document.getElementById('textsearch');
var ullison=ul.getElementsByTagName('li')[1];
console.log(ullison);
var divt=document.getElementsByClassName('hello');
console.log(divt);
var divsearch=document.querySelectorAll('.box')[1];

console.log(divsearch);
var div=document.getElementById('hellom');
var nus=div.getElementsByClassName('box2');
console.log(nus);