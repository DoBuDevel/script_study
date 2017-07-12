function Person(name) {
    this.name = name;
}
Person.prototype = {
    yell: function () {
        // alert("My name is " + this.name);
        console.log("My name is " + this.name);
    }
};
var unikys = Object.create(Person.prototype);
unikys.name = "Unikys";
unikys.yell(); // === "My name is Unikys"
// Check inheritance
console.log(unikys instanceof Person); // === true
