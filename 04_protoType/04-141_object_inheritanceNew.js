// 객체로 프로토타입을 수정한 자바스크립트 상속 구현 NEW
function Person() {
    this.name = "anonymous";
    this.sayHello = function () {
        console.log("Hello, my name is " + this.name);
    };
}
function Unikys() {
    this.name = "Unikys";
}
Unikys.prototype = new Person();
var unikys = new Unikys();
unikys.sayHello();
console.log(unikys instanceof Unikys); // === true
console.log(unikys instanceof Person); // === true
