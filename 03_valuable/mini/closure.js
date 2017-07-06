// 클로저로 변수 사용을 피하는 예
(function () {
  var localVal = "not global"
}());

// 모듈로 글로벌 변수 사용을 피하는 예 -- 모듈 네임스 패턴

var myModule = (function () {
  var localValue = "it's local valuable";
  return {
    show : function () {
      alert(localValue);
    }
  }
}());
console.log(myModule);
myModule.show();
