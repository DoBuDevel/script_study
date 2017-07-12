// class 와 extends 를  통한 상속
// 기존의 모호한 new 사용법을 대체하여 extends 와 class 를 만들어냈다
//  호환성에 문제가 있다 사용 할때는 호환성따져서 코딩 해야 될 것이다.

class Person {
    constructor() {
        this.name = "anonymous";
    }
}
class Unikys extends Person {
    constructor() {
        super();
        this.name = "Unikys";
    }
}
var unikys = new Unikys();
console.log(unikys instanceof Unikys); // === true
console.log(unikys instanceof Person); // === true
console.log(unikys.constructor); // === class Unikys extends Person
