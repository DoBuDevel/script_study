 // 초기 create 함수 익스 9 폭스 5 이상..
 // 생성자로 객체를 생성하면서 연결이 깨지는게 맘에 안들어서 나옴

Object.create = function (o) {
    function F() {}
    F.prototype = o;
    return new F();
}
