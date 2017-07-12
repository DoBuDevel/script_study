function Car() {
    this.wheel = 4;
    this.beep = "BEEP!";
};
Car.prototype.go = function () {
    alert(this.beep);
};
function Truck() {
    this.wheel = 6;
    this.beep = "HONK!";
};
Truck.prototype = new Car();
function SUV() {
    this.beep = "WANK!";
};
SUV.prototype = new Car();
var truck = new Truck(),
    suv = new SUV();
console.log(truck.wheel); // === 6
console.log(suv.wheel); // === 4
console.log(truck.beep); // === "HONK!"
console.log(suv.beep); // === "WANK!"
truck.go(); // === "HONK!"
suv.go(); // === "WANK!"
