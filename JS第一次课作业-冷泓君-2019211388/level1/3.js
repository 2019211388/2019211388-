//3.合并两个数组并进行排序。
var arr1=[1,3,5,7,9];
var arr2=[2,4,6,8,10];

function merge(arr1,arr2){
  //code
  var arr=[];
  arr=arr1.concat(arr2);
  var temp;
    for(var i=0;i<arr.length;i++){
      for(var j=0;j<arr.length-i;j++){
        if(arr[j]>arr[j+1]){
          temp=arr[j];
          arr[j]=arr[j+1];
          arr[j+1]=temp;
        }
      }
    }
  return arr;
}

console.log(merge(arr1,arr2));//[1,2,3,4,5,6,7,8,9,10]