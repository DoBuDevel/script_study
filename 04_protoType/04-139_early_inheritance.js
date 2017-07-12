// 초창기의 상속 구현
function Person() {
    this.name = "anonymous";
    this.job = "none";
    this.sayHello = function () {
        alert("Hello, my name is " + this.name);
    };
}
function Unikys() {
    var obj = new Person();
    obj.name = "Unikys";
    obj.job = "Programmer";
    return obj;
}
var unikys = new Unikys();
unikys.sayHello(); // === "Hello, my name is Unikys"
// Problem with this method
console.log(unikys instanceof Unikys); // === false
console.log(unikys instanceof Person); // === true

/**
 * 초창기 자바 스크립트에서는 ECMAScript 표준의 처리 단계를 우회하여 기본적으로
 * 반환되는 this 대신 새로운 obj를 반환하는 방식으로 상속을 구현하였다. 이러한
 * 방법은 나름 직관적으로 보이기도 하지만, 치명적인 단점이 있다. 바로 unikys 변수가
 * Unikys의 인스턴스가 아닌 Person의 인스턴스로만 인식한다는 점이다.
 *
 */
