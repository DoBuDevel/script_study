(function (window) {
    var myLibrary = {
        helloWorld: function () {
            alert("Hello World!");
        },
        hello: {
            world: function () {
                alert("Hello Module!!");
            }
        }
    };
    window.myLibrary = myLibrary;
}(window));
myLibrary.helloWorld(); // === Hello World!
myLibrary.hello.world(); // === Hello Module!!

// 최초의 function은 즉시 호출 함수가 되어 내부적으로 바로 실행 되며, 이 함수의 인자로
// window를 넘긴다. 이렇게 window를 넘기면 앞으로 이 모듈 안에서 window 라는 변수값은
// 글로벌 변수로써 계속 활용 된다.

// 모듈 패턴의 다양한 활용 방법
// 글로벌 변수에 모듈 패턴을 할당하는 형태
var myLibrary = (function (window) {
  var myLibrary ={

  }
  return myLibrary;
}(window));

//  글로벌 변수에 객체 표현식으로 모듈 패턴을 할당하는 형태
var myLibrary = (function (window) {
  return {

  };
}(window));

// 구글의 모듈 패턴 활용 예
var latlng = new google.maps.LatLng(-34.397,150.644);
var map = new google.maps.Map(documnet.getElmentById("canvas"),{
    center: latlng
});
