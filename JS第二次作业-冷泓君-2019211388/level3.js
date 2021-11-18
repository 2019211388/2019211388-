var data = {
    age: 18,
    name: "这是真的难",
    education: ["小学", "初中", "高中", "大学", undefined, null],
    friends: [
          { name: "Amber",sex: "woman"},
          { name: "Barbara",sex: "woman"},
          { name: "Venti",sex: "man"}], 
    work: { 
            time: "2021", 
            project: { name: "test",obtain: ["css", "html", "js"]} 
          }, 
    play: function() {    console.log("玩滑板");  }
}

function copydata(obj){
    var newdata={};
    for(let key in obj){
        if(typeof obj[key]=='object'){
            newdata[key]=copydata(obj[key]);
        }else{
            newdata[key]=obj[key];
        }
    }
    return newdata;
}
console.log(copydata(data));