//2.写一个排序算法，对传入数组进行升序排序。
var arr=[1,5,4,8,2,6,3,9,7];
function mySort(arr){
  	//code
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
console.log(mySort(arr)); //[1,2,3,4,5,6,7,8,9]