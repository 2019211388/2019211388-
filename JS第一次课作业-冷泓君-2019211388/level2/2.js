//2.函数递归实现数组扁平化。
var arr = [1, [2, 3], 4, [5, [6, [7, 8]]],[9, 10]];
var res = []; //用来存储返回的数据

function fun1(arr) {
  //code
  for(var i=0;i<arr.length;i++){
      if(Array.isArray(arr[i])){
          fun1(arr[i]);
      }
      else{
          res.push(arr[i]);
      }
  }
}

fun1(arr);
console.log(res); //[1,2,3,4,5,6,7,8,9,10];