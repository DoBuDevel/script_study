function Person() {
    this.name = "anonymous";
}
function Unikys() {
    this.name = "Unikys";
}
Unikys.prototype = Object.create(Person.prototype, {
    constructor: {
        value: Unikys
    }
});
var unikys = new Unikys();
console.log(unikys instanceof Unikys); // === true
console.log(unikys instanceof Person); // === true
console.log(unikys.constructor); // === function Unikys()
