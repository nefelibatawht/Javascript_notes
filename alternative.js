//实现猜数字功能
var num;
var c=typeof(num);
console.log(c);
num=parseInt(Math.random()*100);
for( var count=1; ;count++ ){
    var putin =prompt("请输入数字");
    if(putin!=num){
        console.log('猜错了');
        if(putin>num)
        {
            console.log('猜大了')
        }
        else if(putin<num)
        {
            console.log('猜小了');
        }
    }
    else if(putin==num)
    {
        console.log('猜对了');
        break;
    }
}
console.log('共计尝试次数');
console.log(count);