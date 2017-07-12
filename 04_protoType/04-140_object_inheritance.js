// 객체로 프로토타입을 수정한 자바스크립트 상속 구현
var person = {
    name: "anonymous",
    sayHello: function () {
        alert("Hello, my name is " + this.name);
    }
};
function Unikys() {
    this.name = "Unikys";
}
Unikys.prototype = person;
var unikys = new Unikys();
unikys.sayHello(); // === "Hello, my name is Unikys"
person.sayHello(); // === "Hello, my name is anonymous"
console.log(unikys instanceof Unikys); // === true
