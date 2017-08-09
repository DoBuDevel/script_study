// instanceof 는 상속여부를 구분 그런데 이건 매하다.
var person = {
    yell: function () {
        // alert("My name is " + this.name);
        console.log("My name is " + this.name);
    }
};
var unikys = Object.create(person);
unikys.name = "Unikys";
unikys.yell(); // === "My name is Unikys"
console.log(unikys instanceof person); // === TypeError!
// Check Object.create object prototype
console.log(Object.getPrototypeOf(unikys) === person); // === true
console.log(Object.getPrototypeOf(person)); // === Object {}
// Check Object.create object inheritance
console.log(person.isPrototypeOf(unikys)); // === true
console.log(Object.prototype.isPrototypeOf(unikys)); // === true
