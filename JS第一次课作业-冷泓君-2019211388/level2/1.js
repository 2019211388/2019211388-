//1.使用prompt接收用户输入的数字（需要将输入转换为数字，如果用户输入的内容不能成功转换为数字，应让用户再一次输入，直到能转换成数字为止），
//再将用户输入的数字平方后通过alert展示。
var num;
num=Number(prompt("请输入一个数字："));
while(isNaN(num)){
    num=Number(prompt("你未输入正确的数字，请重新输入："));
}
alert("你输入的数字平方后为："+num*num);