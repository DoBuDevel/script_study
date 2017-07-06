// 즉시 호출 함수로 모듈을 생성하는 예
(function (window) {
  var localVariable = "It's inside local variable";

  window.myModule = {
    show: function () {
      alert(localVariable);
    }
  }
}(window));

myModule.show();
