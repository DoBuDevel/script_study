function Person() {
}
var unikys = new Person(),
    stranger = new Person();
console.log(unikys.constructor === Person); // === true
console.log(unikys.constructor.prototype === Person.prototype); // === true
console.log(unikys.constructor === unikys.constructor.prototype.constructor); // === true
// Changing variable from object
Person.prototype.gender = "male";
stranger.gender = "female";
// Changing variable from prototype
console.log(unikys.gender); // === "male"
console.log(stranger.gender); // === "male"
Person.prototype.gender = "female";
console.log(unikys.gender); // === "female"
console.log(stranger.gender); // === "female"
