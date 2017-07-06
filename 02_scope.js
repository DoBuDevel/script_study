function outer(){
  var cnt = 0;
  var inner = function (){
    return ++cnt;
  }
  return inner;
}

var increase = outer();
console.log(increase()); // 1
console.log(increase()); // 2

var counter = outer();
console.log(counter()); //1
